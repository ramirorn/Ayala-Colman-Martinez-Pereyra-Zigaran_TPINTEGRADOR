import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Activity, Clock, Hash, Percent, 
  BarChart2, Table as TableIcon, BrainCircuit, PieChart 
} from 'lucide-react';
import './App.css';

// Variantes para animaciones de framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/stats')
      .then(response => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setData(response.data);
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Error de conexión. Asegúrate de que el backend esté en ejecución.');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="loading">
      <div className="loader-spinner"></div>
      <p>Cargando datos estadísticos...</p>
    </div>
  );
  
  if (error) return (
    <div className="error">
      <Activity size={48} />
      <p>{error}</p>
    </div>
  );

  const { estadisticas, frecuencias, n } = data;

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <PieChart className="nav-icon" size={28} />
          <span>Estadística</span>
        </div>
        <div className="nav-badges">
          <span className="badge">Proyecto Integrador</span>
          <span className="badge">n = {n}</span>
        </div>
      </nav>

      <div className="dashboard">
        <motion.header 
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Bienestar Digital</h1>
          <p>Resultados del análisis estadístico sobre el impacto y consumo de redes sociales en el rendimiento académico de los estudiantes.</p>
        </motion.header>

        <motion.div 
          className="kpi-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="kpi-card" variants={itemVariants}>
            <div className="kpi-header">
              <h3>Media Aritmética</h3>
              <Clock className="kpi-icon" size={20} />
            </div>
            <p className="kpi-value">{estadisticas.media.toFixed(2)}<span className="kpi-unit">hs</span></p>
          </motion.div>

          <motion.div className="kpi-card" variants={itemVariants}>
            <div className="kpi-header">
              <h3>Mediana</h3>
              <Activity className="kpi-icon" size={20} />
            </div>
            <p className="kpi-value">{estadisticas.mediana.toFixed(2)}<span className="kpi-unit">hs</span></p>
          </motion.div>

          <motion.div className="kpi-card" variants={itemVariants}>
            <div className="kpi-header">
              <h3>Moda</h3>
              <Hash className="kpi-icon" size={20} />
            </div>
            <p className="kpi-value">{estadisticas.moda}<span className="kpi-unit">hs</span></p>
          </motion.div>

          <motion.div className="kpi-card" variants={itemVariants}>
            <div className="kpi-header">
              <h3>Desviación Estándar</h3>
              <Percent className="kpi-icon" size={20} />
            </div>
            <p className="kpi-value">{estadisticas.desvio.toFixed(2)}<span className="kpi-unit">hs</span></p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="charts-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="chart-wrapper" variants={itemVariants}>
            <h2><BarChart2 className="section-icon" /> Distribución de Horas Diarias</h2>
            <div className="chart-inner">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={frecuencias} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="x" stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                    itemStyle={{ color: '#00f0ff', fontWeight: 'bold' }}
                    labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                    formatter={(value) => [`${value} estudiantes`, 'Frecuencia']}
                    labelFormatter={(label) => `${label} Horas`}
                  />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <Bar dataKey="fi" radius={[6, 6, 0, 0]}>
                    {frecuencias.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="url(#colorUv)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div className="table-wrapper" variants={itemVariants}>
            <h2><TableIcon className="section-icon" /> Tabla de Frecuencias</h2>
            <table className="glass-table">
              <thead>
                <tr>
                  <th>Horas (x)</th>
                  <th style={{ textTransform: 'none', fontStyle: 'italic', fontSize: '0.9rem' }}>f<sub>i</sub></th>
                  <th style={{ textTransform: 'none', fontStyle: 'italic', fontSize: '0.9rem' }}>F<sub>i</sub></th>
                  <th style={{ textTransform: 'none', fontStyle: 'italic', fontSize: '0.9rem' }}>f<sub>r</sub></th>
                  <th style={{ textTransform: 'none', fontStyle: 'italic', fontSize: '0.9rem' }}>F<sub>r</sub></th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {frecuencias.map((row) => (
                  <tr key={row.x}>
                    <td style={{ color: '#fff', fontWeight: '600' }}>{row.x}</td>
                    <td>{row.fi}</td>
                    <td>{row.Fi}</td>
                    <td>{row.fri.toFixed(3)}</td>
                    <td>{row.Fri.toFixed(3)}</td>
                    <td style={{ color: '#00f0ff' }}>{row.pi_pct.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;

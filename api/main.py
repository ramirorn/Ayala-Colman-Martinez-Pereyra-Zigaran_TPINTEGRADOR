from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from api.analysis import get_stats
except ModuleNotFoundError:
    from analysis import get_stats
import os

app = FastAPI(title="Bienestar Digital API")

# Configurar CORS para permitir peticiones desde el frontend de Vite (usualmente en puerto 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/stats")
def stats_endpoint():
    # Asumimos que se corre desde la raíz del proyecto
    filepath = 'datos_estudiantes.xlsx'
    if not os.path.exists(filepath):
        filepath = '../datos_estudiantes.xlsx'
    
    return get_stats(filepath)

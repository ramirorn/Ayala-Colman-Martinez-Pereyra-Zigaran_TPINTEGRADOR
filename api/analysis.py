import pandas as pd
import numpy as np

def get_stats(filepath: str = 'datos_estudiantes.xlsx'):
    # Leer datos
    try:
        datos = pd.read_excel(filepath)
    except Exception as e:
        return {"error": f"No se pudo cargar {filepath}. Detalle: {str(e)}"}

    horas_redes = datos['Horas de consumo de redes sociales por día']
    cantidad_estudiantes = len(datos)

    # 1. Tabla de Frecuencias
    tabla_frecuencias = (horas_redes.value_counts()
                                    .sort_index()
                                    .rename_axis('x')
                                    .reset_index(name='fi'))
    
    tabla_frecuencias['Fi'] = tabla_frecuencias['fi'].cumsum()
    tabla_frecuencias['fri'] = tabla_frecuencias['fi'] / cantidad_estudiantes
    tabla_frecuencias['Fri'] = tabla_frecuencias['fri'].cumsum()
    tabla_frecuencias['pi_pct'] = tabla_frecuencias['fri'] * 100
    tabla_frecuencias['Pi_pct'] = tabla_frecuencias['Fri'] * 100

    # 2. Medidas de tendencia central y dispersión
    media = horas_redes.mean()
    mediana = horas_redes.median()
    moda = int(horas_redes.mode()[0])
    varianza = horas_redes.var(ddof=0)
    desvio = horas_redes.std(ddof=0)
    cv = (desvio / media) * 100

    cuartil_1 = horas_redes.quantile(0.25)
    cuartil_3 = horas_redes.quantile(0.75)

    return {
        "n": cantidad_estudiantes,
        "frecuencias": tabla_frecuencias.to_dict(orient="records"),
        "estadisticas": {
            "media": float(media),
            "mediana": float(mediana),
            "moda": int(moda),
            "varianza": float(varianza),
            "desvio": float(desvio),
            "coef_variacion": float(cv),
            "q1": float(cuartil_1),
            "q3": float(cuartil_3)
        }
    }

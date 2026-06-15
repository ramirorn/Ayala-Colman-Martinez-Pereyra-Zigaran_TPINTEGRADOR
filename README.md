# Trabajo Práctico Integrador — Bienestar Digital

**Instituto Politécnico Formosa** · Estadística · TSDSM — 2.º Año · 2026

---

## Presentación del proyecto

Este repositorio documenta el **Trabajo Práctico Integrador** de la materia Estadística, orientado al análisis del **bienestar digital** y del **uso responsable de pantallas** en dispositivos móviles.

El proyecto parte de una problemática actual: en una cultura digital y algorítmica, estudiantes y docentes están expuestos a grandes volúmenes de estímulos, contenidos y aplicaciones que pueden derivar en un uso excesivo de pantallas. La Organización Mundial de la Salud (OMS) recomienda que los adolescentes de 5 a 17 años limiten su tiempo frente a pantallas a **menos de 2 o 3 horas diarias**.

La estadística descriptiva permite transformar registros de uso digital en evidencia interpretable, fundamentar decisiones y diseñar acciones concretas de mejora. Este trabajo integra los contenidos de la cursada — frecuencias, medidas de tendencia central y dispersión, posición, forma de la distribución, correlación y regresión lineal — aplicándolos tanto a datos propios como a una base provista por la cátedra.

### Integrantes del grupo

| Apellido y nombre |
|---|
| Ayala, Santiago |
| Colman, Máximo |
| Martínez, Javier Nicolás |
| Pereyra, Ramiro Nicolás |
| Zigaran, Lucas Natanael |

**Profesoras:** Johanna Gisele Dellagnolo y Marcos Montellano

---

## Objetivos

- Reflexionar críticamente sobre el impacto de las tecnologías digitales en la calidad de vida.
- Elaborar conclusiones basadas en evidencia estadística sobre fenómenos asociados al bienestar digital.
- Integrar los contenidos desarrollados durante la cursada de Estadística.
- Aplicar estadística descriptiva para el análisis e interpretación de datos.
- Interpretar tablas y gráficos estadísticos.
- Obtener media, moda, mediana, varianza, desvío estándar, deciles, cuartiles, percentiles, coeficiente de asimetría y curtosis.
- Analizar relaciones entre variables mediante regresión lineal y correlación.
- Utilizar Excel y Python (Pandas, NumPy, Matplotlib) como herramientas de procesamiento y visualización.
- Desarrollar capacidades de interpretación, análisis crítico y presentación de resultados.

---

## Condiciones generales de la actividad

- Trabajo grupal de hasta **5 integrantes**, con participación activa de todos los miembros.
- Registro del grupo en la hoja *Integrantes de grupos para el Trabajo Integrador*.
- El trabajo integrador tiene valoración en la nota final.
- **Fecha de entrega:** 03/07/2026.
- Entrega en formato digital: **PDF**, **Excel** y **repositorio de GitHub**.
- Se adjunta una **presentación** con resumen del trabajo (formato libre).
- Presentación fuera de término implica instancia de recuperación.

### Estructura del informe final

El documento entregable debe incluir:

1. Carátula  
2. Índice general  
3. Desarrollo de actividades (etapas 1 a 6)  
4. Interpretación de resultados  
5. **Conclusión grupal:** resultados obtenidos, utilidad de la estadística, diferencias entre resolución manual y computacional, ventajas de Excel y Python  
6. **Conclusión individual** de cada integrante: conocimientos adquiridos, dificultades e importancia del trabajo  
7. Bibliografía (si corresponde)

### Formato del documento PDF

| Criterio | Especificación |
|---|---|
| Tamaño de hoja | A4 |
| Fuente | Arial 12 |
| Interlineado | 1,5 |
| Alineación | Texto justificado |
| Numeración | Páginas numeradas |
| Márgenes | Normales |
| Nombre del archivo | `Apellido1_Apellido2_Apellido3_TPINTEGRADOR.pdf` |
| Repositorio GitHub | `Apellido1_Apellido2_Apellido3_TPINTEGRADOR` |

---

## Base de datos: `DATOS_ESTUDIANTILES.xlsx`

Archivo provisto por la cátedra con los resultados de una encuesta sobre consumo de redes sociales y rendimiento académico en un grupo de **200 estudiantes** durante el último mes.

### Hojas del libro

| Hoja | Contenido |
|---|---|
| **Datos Estudiantes** | Registros individuales (n = 200) |
| **Etapa 1** | Tabla de frecuencias y cálculos descriptivos |
| **Etapa 5** | Correlación y regresión lineal |

### Variables

| Variable | Descripción | Tipo | Escala |
|---|---|---|---|
| Horas de consumo de redes sociales por día | Cantidad diaria de horas en redes sociales | Cuantitativa discreta | Intervalo / razón |
| Rendimiento académico | Indicador de desempeño académico del estudiante | Cuantitativa | Intervalo |

**Rango observado en la muestra:** entre 1 y 8 horas diarias de redes sociales; rendimiento académico entre 5 y 10 puntos.

---

## Desarrollo por etapas

### Primera etapa — Encuesta y análisis descriptivo integral

Se diseñó y aplicó una encuesta a una muestra de **200 personas** sobre la cantidad de horas de uso de pantalla en celulares o dispositivos móviles (iPhone o Android) durante los **últimos siete días**, consultando la información en *Configuración → Salud digital* (Android) o *Tiempo en pantalla* (iPhone).

**Actividades realizadas:**

- **a)** Identificación de variable estadística, tipo de variable y escala de medición.  
- **b)** Determinación de población, muestra y unidad de observación.  
- **c)** Construcción de la tabla completa de frecuencias (absolutas, relativas, acumuladas y porcentuales).  
- **d)** Interpretación de frecuencias puntuales y acumuladas (f₂, f₅, f₈, F₄, F₇, F₁₀, p₃, p₆, p₉, P₈, P₁₂).  
- **e)** Cálculo de cantidades y porcentajes en intervalos de consumo (entre 3 y 8 h, más de 6 h, menos de 2 h, entre 5 y 10 h, etc.).  
- **f)** Media aritmética, moda, mediana, coeficiente de asimetría y curtosis.  
- **g)** Varianza, desvío estándar y coeficiente de variación.  
- **h)** Cuartiles (Q1, Q3), deciles (D3, D4, D9) y percentiles (P23, P75, P97).  
- **i)** Construcción del histograma (con título, nombres de ejes y escala adecuada).

> Si alguna medida supera las **3 horas diarias**, se continúa con la segunda etapa.

**Resultados principales (muestra de 200 estudiantes — redes sociales):**

| Medida | Valor |
|---|---|
| Media aritmética | 4,24 horas |
| Mediana | 4 horas |
| Moda | 4 horas |
| Estudiantes con 4 h/día (moda) | 32 (16 %) |
| Estudiantes con hasta 4 h/día | 111 (55,5 %) |
| Estudiantes con 5 h o más | 89 (44,5 %) |

---

### Segunda etapa — Plan de acción para reducir el consumo digital

Ante un consumo promedio superior al umbral recomendado, se propusieron acciones concretas:

1. Establecer **límites diarios por aplicación** desde las herramientas de bienestar digital del dispositivo.
2. **Desactivar notificaciones** no esenciales para evitar impulsos de revisión del teléfono.
3. Activar **modo escala de grises** o **modo concentración** en horarios de estudio.
4. Definir **horarios libres de pantalla** (comidas, primera hora de la mañana, hora previa a dormir).
5. **Reemplazar el scroll pasivo** por actividades alternativas planificadas (deporte, lectura, encuentros presenciales).
6. **Eliminar de la pantalla de inicio** las aplicaciones más consumidoras de tiempo.
7. **Revisar semanalmente** el informe de tiempo de pantalla para verificar la efectividad de las medidas.

---

### Tercera etapa — Reflexión sobre nuestras acciones

Análisis crítico a partir de los registros personales de los dispositivos del grupo:

| Interrogante | Hallazgo |
|---|---|
| ¿Alguna medida supera las 3 horas? | **Sí.** La media (4,24 h) y la mediana (4 h) superan el umbral; el exceso es una tendencia sostenida, no un día aislado. |
| ¿Día de mayor uso? | **Domingo.** Hipótesis: mayor tiempo libre sin estructura académica y mayor actividad social en redes durante el fin de semana. |
| ¿Aplicación más utilizada? | **Instagram.** La **moda** es la medida aplicable por tratarse de una variable cualitativa. |
| ¿Causas de indicadores de adicción? | Diseño adictivo de apps, factores emocionales (ansiedad, aburrimiento, FOMO), presión de pares y falta de hábitos alternativos. |
| ¿Consecuencias de una media muy superior a 3 h? | Menor rendimiento académico, sedentarismo, alteraciones del sueño, mayor ansiedad y menor interacción presencial de calidad. |

---

### Cuarta etapa — Contrastación de datos

Se utilizó el archivo `DATOS_ESTUDIANTILES.xlsx` con la variable **Horas de consumo de redes sociales por día**, construyendo la tabla de frecuencias completa con **Python (Pandas)**.

**Tabla de frecuencias (resumen):**

| xᵢ (horas) | fᵢ | Fᵢ | frᵢ | Frᵢ | pᵢ % | Pᵢ % |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 24 | 24 | 0,120 | 0,120 | 12,0 | 12,0 |
| 2 | 27 | 51 | 0,135 | 0,255 | 13,5 | 25,5 |
| 3 | 28 | 79 | 0,140 | 0,395 | 14,0 | 39,5 |
| 4 | 32 | 111 | 0,160 | 0,555 | 16,0 | 55,5 |
| 5 | 26 | 137 | 0,130 | 0,685 | 13,0 | 68,5 |
| 6 | 26 | 163 | 0,130 | 0,815 | 13,0 | 81,5 |
| 7 | 24 | 187 | 0,120 | 0,935 | 12,0 | 93,5 |
| 8 | 13 | 200 | 0,065 | 1,000 | 6,5 | 100,0 |

**Medida de comparación elegida:** media aritmética  
**x̄ = Σ(xᵢ · fᵢ) / n = 848 / 200 = 4,24 horas**

**Interpretación:** el consumo promedio de la muestra institucional (4,24 h) coincide con el registrado en la primera etapa con datos propios. El patrón de consumo elevado no es excepcional sino **generalizado** en la población estudiantil. La mediana y la moda (ambas 4 h) confirman una distribución relativamente simétrica.

---

### Quinta etapa — Correlación y regresión lineal

Análisis de la relación entre **horas de redes sociales por día** (X) y **rendimiento académico** (Y) utilizando los datos del Excel.

| Elemento | Resultado / interpretación |
|---|---|
| **Diagrama de dispersión** | Relación inversa entre ambas variables |
| **Tipo de correlación** | Lineal **negativa**, intensidad **moderada-fuerte** |
| **Recta de regresión** | ŷ = 9,4 − 0,38x (Excel: funciones PENDIENTE e INTERSECCION.EJE) |
| **Pendiente (b ≈ −0,379)** | Por cada hora adicional de redes sociales, el rendimiento disminuye ~0,38 puntos en promedio |
| **Coeficiente de correlación (r)** | r ≈ −0,7 — correlación negativa moderada-fuerte |
| **Coeficiente de determinación (r²)** | r² ≈ 0,47 — el **47 %** de la variabilidad del rendimiento se explica por las horas de redes; el 53 % restante depende de otros factores (hábitos de estudio, sueño, etc.) |

---

### Sexta etapa — Programa integrado en Python

Desarrollo de un programa en Python que calcula, analiza y representa gráficamente los conceptos estadísticos de las etapas anteriores.

**Requisitos técnicos:**

- Librerías: **Pandas**, **NumPy**, **Matplotlib**
- Variables: horas de redes sociales por día y rendimiento académico
- Salida por pantalla de resultados e interpretaciones
- Gráficos con capturas incluidas en el informe PDF
- Comparación entre resultados **manuales**, **Excel** y **Python**

**Requisitos del código:**

- Código comentado con títulos descriptivos
- Nombres de variables claros y resultados correctamente mostrados
- Repositorio nombrado: `Apellido1_Apellido2_Apellido3_TPINTEGRADOR`

---

## Archivos del repositorio

| Archivo | Descripción |
|---|---|
| `README.md` | Documentación general del proyecto (este archivo) |
| `etapa6.ipynb` | Notebook Python — análisis integrado (etapa 6) |
| `requirements.txt` | Dependencias del entorno Python |
| `datos_estudiantes.xlsx` | Excel con el dataset que se utilizo para el trabajo |

---

## Herramientas utilizadas

| Herramienta | Uso en el proyecto |
|---|---|
| **Excel** | Organización de datos, tablas de frecuencias, funciones estadísticas y regresión |
| **Python** | Automatización de cálculos, tablas de frecuencias y visualizaciones |
| **Pandas** | Lectura y procesamiento del dataset |
| **NumPy** | Operaciones numéricas y cálculos estadísticos |
| **Matplotlib** | Histogramas, diagramas de dispersión y gráficos de regresión |

---

## Cómo ejecutar el análisis en Python

```bash
# 1. Clonar el repositorio
git clone https://github.com/<usuario>/Apellido1_Apellido2_Apellido3_TPINTEGRADOR.git
cd Apellido1_Apellido2_Apellido3_TPINTEGRADOR

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Ejecutar el notebook o script
jupyter notebook etapa6.ipynb
```

> Asegurarse de que `DATOS_ESTUDIANTILES.xlsx` se encuentre en la misma ruta que el notebook, o ajustar la ruta de lectura en el código.

---

## Conclusiones

La estadística descriptiva demostró ser una herramienta fundamental para comprender el uso de pantallas y redes sociales en contextos educativos. Los datos evidenciaron un consumo promedio de **4,24 horas diarias**, superior al umbral de 3 horas recomendado por la OMS, tanto en registros personales como en la muestra institucional de 200 estudiantes.

El análisis de correlación reveló una relación **negativa moderada-fuerte** entre el tiempo en redes sociales y el rendimiento académico, lo que refuerza la necesidad de las acciones de bienestar digital propuestas. La comparación entre métodos manuales, Excel y Python permitió valorar las ventajas de cada herramienta: la comprensión conceptual del cálculo manual, la accesibilidad de Excel y la escalabilidad y reproducibilidad de Python.

---

## Referencias

- Instituto Politécnico Formosa — Trabajo Práctico Integrador: *Bienestar Digital* (consigna oficial).
- Organización Mundial de la Salud (OMS) — Recomendaciones sobre tiempo de pantalla en adolescentes.
- Material de cursada de Estadística — apuntes y actividades del primer cuatrimestre 2026.

---

*Trabajo Práctico Integrador de Estadística — Instituto Politécnico Formosa — 2026*

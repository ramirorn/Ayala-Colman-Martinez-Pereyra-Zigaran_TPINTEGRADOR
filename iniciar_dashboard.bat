@echo off
echo Iniciando Backend (FastAPI)...
start cmd /k "cd api && ..\venv\Scripts\activate && uvicorn main:app --reload"

echo Iniciando Frontend (Vite + React)...
start cmd /k "cd frontend && npm run dev"

echo.
echo =======================================================
echo Ambos servidores se estan iniciando en ventanas nuevas.
echo El frontend se abrira automaticamente en tu navegador 
echo (o ve a http://localhost:5173).
echo =======================================================
echo.
pause

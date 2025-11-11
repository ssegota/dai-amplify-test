# DAI Vite App (Frontend + Backend)

Simple Vite + React frontend and Express + pg backend wired to PostgreSQL.

## Prereqs
- Node 18+
- PostgreSQL 16+ running locally

## Backend
```bash
cd backend
npm install
# optional: copy .env.example to .env and edit values
node server.js
```
Backend runs at http://localhost:5000

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at http://localhost:3000

## Database config
Edit `backend/db.js` or set env vars:
PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD
Defaults: localhost:5432 / dai_test / user sbs (no password).

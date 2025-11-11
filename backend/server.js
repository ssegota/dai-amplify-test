import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const q = 'SELECT * FROM users WHERE username = $1 AND passwordhash = $2';
    const r = await pool.query(q, [username, password]);
    if (r.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ success: true, user: r.rows[0] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/patients/:userId', async (req, res) => {
  try {
    console.log('DEBUG /api/patients called with param:', req.params.userId);

    const q = `
      SELECT p.*
      FROM patient p
      JOIN user_patient up ON p.patientid = up.patientid
      WHERE up.userid = $1
      ORDER BY p.lastname, p.firstname;
    `;

    const userId = Number(req.params.userId);
    console.log('DEBUG userId parsed as:', userId, 'type:', typeof userId);

    const result = await pool.query(q, [userId]);
    console.log('DEBUG returned rows:', result.rows.length);

    res.json(result.rows);
  } catch (e) {
    console.error('ERROR fetching patients:', e);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

// GET results for a given user AND patient
app.get('/api/results/:userId/:patientId', async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const patientId = Number(req.params.patientId);

    const q = `
      SELECT f.*
      FROM features f
      JOIN signal s ON f.experimentid = s.experimentid
      WHERE s.userid = $1 AND s.patientid = $2
      ORDER BY f.resultid DESC;
    `;

    const r = await pool.query(q, [userId, patientId]);
    res.json(r.rows);
  } catch (e) {
    console.error('ERROR fetching results:', e);
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

app.post('/api/sendResult', (req, res) => {
  const data = req.body;
  console.log('Result sent:', data);
  res.json({ success: true, echo: data });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

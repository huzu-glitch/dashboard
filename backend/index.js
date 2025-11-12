import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to PostgreSQL at:', result.rows[0].now);
  });
});

app.get('/theme/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query('SELECT theme FROM user_settings WHERE user_id = $1', [userId]);
    if (result.rows.length > 0) {
      res.json({ theme: result.rows[0].theme });
    } else {
      res.status(404).json({ message: 'Theme not found for this user' });
    }
  } catch (err) {
    console.error('Error fetching theme:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/theme/:userId', async (req, res) => {
  const { userId } = req.params;
  const { theme } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO user_settings (user_id, theme) VALUES ($1, $2) ON CONFLICT (user_id) DO UPDATE SET theme = $2 RETURNING *',
      [userId, theme]
    );
    res.json({ message: 'Theme updated successfully', theme: result.rows[0].theme });
  } catch (err) {
    console.error('Error updating theme:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

import pool from '@/lib/db';

export default async function handler(req, res) {
  const { email } = req.query; // Get email from URL

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(result.rows[0]); // Return the found user
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

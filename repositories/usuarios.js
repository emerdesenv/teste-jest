import { pool } from '../db/db.js';

export async function listarUsuarios() {
    const [rows] = await pool.query('SELECT * FROM usuarios');

    console.log(rows);

    return rows;
}

listarUsuarios();
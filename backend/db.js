import pkg from 'pg';
const { Pool } = pkg;

const {
  PGHOST = 'localhost',
  PGPORT = '5432',
  PGDATABASE = 'dai_test',
  PGUSER = 'sbs',
  PGPASSWORD = ''
} = process.env;

export const pool = new Pool({
  host: PGHOST,
  port: Number(PGPORT),
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD
});

import mysql2 from 'mysql2';

export const db = mysql2.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'lessonfeed',
});

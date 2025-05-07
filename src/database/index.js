const { Client } = require('pg');

const client = new Client({
  host:'localhost',
  port:5432,
  user:'root',
  password: 'root',
  database:'pgtodo'
})

client.connect();

//client.query('SELECT * FROM tasks').then(console.log);

exports.query = async (query,values) => {
  const { rows } = await client.query(query,values)
  return rows;
}

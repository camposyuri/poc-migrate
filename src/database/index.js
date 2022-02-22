const { Client } = require("pg");

// TODO: Criando uma novo instância de Client
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "postgres",
});

// TODO: Conectando com o DB PostgreSQL
client.connect();

// TODO: Executa nossa instrução SQL
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "121212",
  host: "localhost",
  port: process.env.PORT | 5432,
  database: "welbex_test"
});

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = pool;

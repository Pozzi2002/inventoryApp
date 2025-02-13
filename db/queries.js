const pool = require('./pool');

exports.getSums = async () => {
   const { rows } = await pool.query('SELECT SUM(quantity) as quantity, COUNT(DISTINCT address) as shops FROM store');
   return rows;
};

exports.getAllAssets = async () => {
   const { rows } = await pool.query("SELECT name, color, price, quantity, address FROM products INNER JOIN productsinfo ON (products.id = product_id) JOIN store ON (product_id = productinfo_id)")
   return rows
};

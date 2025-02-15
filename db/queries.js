const pool = require('./pool');

exports.getSums = async () => {
   const { rows } = await pool.query('SELECT COUNT(*) AS quantity, COUNT(DISTINCT address_id) AS shops FROM assets');
   return rows;
};

exports.getAllAssets = async () => {
   const { rows } = await pool.query("SELECT name, color, address, price, quantity FROM assets JOIN products ON (name_id = products.id) JOIN colors ON (color_id = colors.id) JOIN addresses ON (address_id = addresses.id)")
   return rows
};

exports.searchAssetsByName = async (name) => {
  if (isNaN(name) || name.length == 0) {
   const { rows } = await pool.query(`SELECT name, color, price, quantity, address FROM assets 
                                      JOIN products ON (name_id = products.id) 
                                      JOIN colors ON (color_id = colors.id) 
                                      JOIN addresses ON (address_id = addresses.id) 
                                      WHERE name ILIKE $1 OR color ILIKE $1 OR address ILIKE $1`, [`%${name}%`]);
      return rows
 } else {
   const { rows } = await pool.query(`SELECT name, color, price, quantity, address FROM assets 
                                      JOIN products ON (name_id = products.id) 
                                      JOIN colors ON (color_id = colors.id) 
                                      JOIN addresses ON (address_id = addresses.id) 
                                      WHERE price = $1 OR quantity = $1`, [`${name}`]);
   return rows
 }
};

exports.productsTable = async () => {
   const { rows } = await pool.query('SELECT id, name FROM products');
   return rows
};

exports.colorsTable = async () => {
   const { rows } = await pool.query('SELECT id, color FROM colors');
   return rows;
};

exports.addressesTable = async () => {
   const { rows } = await pool.query('SELECT id, address FROM addresses');
   return rows;
}

exports.addToProductTable = async (name) => {
   await pool.query('INSERT INTO products (name) VALUES ($1)', [name]);
   return
};

exports.addToColorsTable = async (color) => {
   await pool.query('INSERT INTO colors (color) VALUES ($1)', [color]);
   return
};

exports.addToAdressesTable = async (address) => {
   await pool.query('INSERT INTO addresses (address) VALUES ($1)', [address]);
   return
};


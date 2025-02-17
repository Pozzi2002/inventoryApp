const pool = require('./pool');

exports.getAllAssets = async () => {
   const { rows } = await pool.query("SELECT assets.id, name, color, address, price, quantity FROM assets JOIN products ON (name_id = products.id) JOIN colors ON (color_id = colors.id) JOIN addresses ON (address_id = addresses.id)")
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

exports.addToAssetsTable = async (name_id, color_id, address_id, price = 0, quantity = 0) => {
  await pool.query(`INSERT INTO assets (name_id, color_id, address_id, price, quantity) 
                    VALUES ($1, $2, $3, $4, $5)`, [name_id, color_id, address_id, price, quantity])
  return
};

exports.deleteProductFromTable = async (id) => {
   await pool.query(`DELETE FROM products WHERE id = $1`, [id]);
   return
};

exports.deleteColorFromTable = async (id) => {
   await pool.query(`DELETE FROM colors WHERE id = $1`, [id]);
   return
};

exports.deleteAddressFromTable = async (id) => {
   await pool.query(`DELETE FROM addresses WHERE id = $1`, [id]);
   return
};

exports.deleteAssetFromTable = async (id) => {
   await pool.query(`DELETE FROM assets WHERE id = $1`, [id]);
   return
};

exports.editProductFromTable = async (newName, id) => {
   await pool.query(`UPDATE products SET name = $1 WHERE id = $2`, [newName, id])
   return
}

exports.editColorFromTable = async (newColor, id) => {
   await pool.query(`UPDATE colors SET color = $1 WHERE id = $2`, [newColor, id])
   return
}

exports.editAddressFromTable = async (newAddress, id) => {
   await pool.query(`UPDATE addresses SET address = $1 WHERE id = $2`, [newAddress, id])
   return
}
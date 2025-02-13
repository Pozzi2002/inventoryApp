const pool = require('./pool');

exports.getSums = async (req, res) => {
   const { rows } = await pool.query('SELECT SUM(quantity) as quantity, COUNT(DISTINCT address) as shops FROM store');
   return rows;
};



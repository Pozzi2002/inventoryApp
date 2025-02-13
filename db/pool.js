const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://NS:1@localhost:5432/inventory_app'
});

module.exports = pool;
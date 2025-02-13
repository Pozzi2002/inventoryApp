const { Client } = require('pg');

const SQL = `
CREATE TABLE products (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT);
CREATE TABLE productsInfo (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, color TEXT, price INTEGER, product_id INTEGER);
CREATE TABLE store (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, address TEXT, quantity INTEGER, productInfo_id INTEGER);

INSERT INTO products (name) VALUES ('T-shirt'), ('Hoodie'), ('Pants'), ('Belt'), ('Sock');
INSERT INTO productsInfo (color, price, product_id) 
  VALUES
    ('white', 40, 1),
    ('black', 40, 1),
    ('gold', 100, 1),
    ('white', 70, 2),
    ('black', 70, 2),
    ('black', 60, 3),
    ('gray', 55, 4),
    ('black' 55, 4),
    ('white', 55, 4),
    ('brown', 55, 4),
    ('white', 15, 5),
    ('black', 15, 5);
`

async function main() {
  console.log('Seeding...');
  const client = new Client({
    connectionString: 'postgresql://NS:1@localhost:5432/inventory_app'
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Done')
};
main();
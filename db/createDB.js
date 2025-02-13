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
    ('black', 55, 4),
    ('white', 55, 4),
    ('brown', 55, 4),
    ('white', 15, 5),
    ('black', 15, 5);
INSERT INTO store (address, quantity, productInfo_id)
  VALUES
    ('Moscow', 10, 1),
    ('Moscow', 13, 2),
    ('Moscow', 1, 3),
    ('Moscow', 7, 4),
    ('Moscow', 7, 5),
    ('Moscow', 6, 6),
    ('Moscow', 3, 7),
    ('Moscow', 4, 8),
    ('Moscow', 3, 9),
    ('Moscow', 5, 10),
    ('Moscow', 8, 11),
    ('Moscow', 8, 12),
    ('London', 8, 1),
    ('London', 16, 2),
    ('London', 2, 3),
    ('London', 5, 4),
    ('London', 3, 5),
    ('London', 8, 6),
    ('London', 1, 7),
    ('London', 7, 8),
    ('London', 2, 9),
    ('London', 8, 10),
    ('London', 12, 11),
    ('London', 8, 12);
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
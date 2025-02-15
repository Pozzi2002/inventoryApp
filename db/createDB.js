const { Client } = require('pg');

const SQL = `
CREATE TABLE products (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, unique(name));
CREATE TABLE colors (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, color TEXT, unique(color));
CREATE TABLE addresses (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, address TEXT, unique(address));
CREATE TABLE assets (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name_id INTEGER, color_id INTEGER, address_id INTEGER, price INTEGER, quantity INTEGER);

INSERT INTO products (name) VALUES ('T-shirt'), ('Hoodie'), ('Pants'), ('Shorts'), ('Belt'), ('Sock');
INSERT INTO colors (color) VALUES ('Black'), ('White'), ('Gold'), ('Gray'), ('Brown');
INSERT INTO addresses (address) VALUES ('Moscow'), ('London');
INSERT INTO assets (name_id, color_id, address_id, price, quantity) 
  VALUES 
  (1, 1, 1, 70, 12),
  (1, 2, 1, 70, 8),
  (1, 3, 1, 130, 3),
  (2, 1, 1, 140, 9),
  (2, 2, 1, 140, 11),
  (3, 1, 1, 135, 5),
  (3, 2, 1, 135, 6),
  (4, 1, 1, 75, 13),
  (4, 2, 1, 75, 13),
  (5, 1, 1, 105, 4),
  (5, 3, 1, 175, 1),
  (5, 5, 1, 105, 2),
  (6, 1, 1, 20, 22),
  (6, 2, 1, 20, 18),

  (1, 1, 2, 70, 14),
  (1, 2, 2, 70, 6),
  (1, 3, 2, 130, 5),
  (2, 1, 2, 140, 6),
  (2, 2, 2, 140, 13),
  (3, 1, 2, 135, 5),
  (3, 2, 2, 135, 4),
  (4, 1, 2, 75, 12),
  (4, 2, 2, 75, 11),
  (5, 1, 2, 105, 3),
  (5, 3, 2, 175, 2),
  (5, 5, 2, 105, 4),
  (6, 1, 2, 20, 21),
  (6, 2, 2, 20, 22);
`

async function main() {
  console.log('Seeding...');
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Done')
};
main();
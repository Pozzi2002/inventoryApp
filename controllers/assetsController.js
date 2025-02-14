const db = require("../db/queries")

exports.getAssets = async (req, res) => {
    const assets = await db.getAllAssets();
    res.render('assets', {assets: assets});
};

exports.searchAssets = async (req, res) => {
    const assets = await db.searchAssetsByName(req.query.search);
    res.render('assets', {assets: assets});
};

exports.GetAllTables = async (req, res) => {
  const products = await db.productsTable();
  const colors = await db.colorsTable();
  const addresses = await db.addressesTable();
  res.render('allTables', {products: products, colors: colors, addresses: addresses});
};

exports.addToProductTable = async (req, res) => {
    await db.addToProductTable(req.body.name);
    res.redirect('/assets/tables')
}
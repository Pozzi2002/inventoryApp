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
    try {
    await db.addToProductTable(req.body.name);
        res.redirect('/assets/tables')
    } catch {
        res.redirect('/assets/tables')
    }
};

exports.addToColorsTable = async (req, res) => {
    try {
    await db.addToColorsTable(req.body.color);
        res.redirect('/assets/tables')
    } catch{
        res.redirect('/assets/tables')
    }
}
exports.addToAdressesTable = async (req, res) => {
    try {
        await db.addToAdressesTable(req.body.address);
        res.redirect('/assets/tables')
    } catch {
        res.redirect('/assets/tables')
    }
}

exports.addToAssetsTable = async (req, res) => {
    await db.addToAssetsTable(req.body.name, req.body.color, req.body.address, req.body.price, req.body.quantity)
    res.redirect('/assets')
}

exports.deleteProductFromTable = async (req, res) => {
    await db.deleteProductFromTable(req.body.id)
    res.redirect('/assets/tables')
}

exports.deleteColorFromTable = async (req, res) => {
    await db.deleteColorFromTable(req.body.id)
    res.redirect('/assets/tables')
}

exports.deleteAddressFromTable = async (req, res) => {
    await db.deleteAddressFromTable(req.body.id)
    res.redirect('/assets/tables')
}

exports.editProductFromTable = async (req, res) => {
    await db.editProductFromTable(req.body.newName, req.body.id)
    res.redirect('/assets/tables')
}

exports.editColorFromTable = async (req, res) => {
    await db.editColorFromTable(req.body.newColor, req.body.id)
    res.redirect('/assets/tables')
}

exports.editAddressFromTable = async (req, res) => {
    await db.editAddressFromTable(req.body.newAddress, req.body.id)
    res.redirect('/assets/tables')
}
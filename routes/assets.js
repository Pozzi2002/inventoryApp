const express = require('express');
const assetsRouter = express.Router();
const assetsController = require('../controllers/assetsController');
const path = require('path');

assetsRouter.get('/', assetsController.getAssets);
assetsRouter.get('/search', assetsController.searchAssets);
assetsRouter.get('/tables', assetsController.GetAllTables);
assetsRouter.post('/tables/name', assetsController.addToProductTable);
assetsRouter.post('/tables/color', assetsController.addToColorsTable);
assetsRouter.post('/tables/address', assetsController.addToAdressesTable);
assetsRouter.post('/tables/new', assetsController.addToAssetsTable);

assetsRouter.post('/tables/delete/product', assetsController.deleteProductFromTable);
assetsRouter.post('/tables/delete/color', assetsController.deleteColorFromTable);
assetsRouter.post('/tables/delete/address', assetsController.deleteAddressFromTable);

assetsRouter.post('/tables/edit/product', assetsController.editProductFromTable);
assetsRouter.post('/tables/edit/color', assetsController.editColorFromTable);
assetsRouter.post('/tables/edit/address', assetsController.editAddressFromTable);

module.exports = assetsRouter;
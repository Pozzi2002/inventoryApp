const express = require('express');
const assetsRouter = express.Router();
const assetsController = require('../controllers/assetsController');
const { body } = require('express-validator');
const path = require('path');

assetsRouter.get('/', assetsController.getAssets);
assetsRouter.get('/search', assetsController.searchAssets);
assetsRouter.get('/tables', assetsController.GetAllTables);

assetsRouter.post('/tables/name', body('name').trim().isLength({ min: 1, max: 20}), assetsController.addToProductTable);
assetsRouter.post('/tables/color', body('color').trim().isLength({ min: 1, max: 20}), assetsController.addToColorsTable);
assetsRouter.post('/tables/address', body('address').trim().isLength({ min: 1, max: 20}), assetsController.addToAdressesTable);
assetsRouter.post('/tables/new', assetsController.addToAssetsTable);

assetsRouter.post('/tables/delete/product', assetsController.deleteProductFromTable);
assetsRouter.post('/tables/delete/color', assetsController.deleteColorFromTable);
assetsRouter.post('/tables/delete/address', assetsController.deleteAddressFromTable);
assetsRouter.post('/tables/delete/asset', assetsController.deleteAssetFromTable);

assetsRouter.post('/tables/edit/product', body('newName').trim().isLength({ min: 1, max: 20}), assetsController.editProductFromTable);
assetsRouter.post('/tables/edit/color', body('newColor').trim().isLength({ min: 1, max: 20}), assetsController.editColorFromTable);
assetsRouter.post('/tables/edit/address', body('newAddress').trim().isLength({ min: 1, max: 20}), assetsController.editAddressFromTable);

module.exports = assetsRouter;
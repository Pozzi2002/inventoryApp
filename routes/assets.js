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




module.exports = assetsRouter;
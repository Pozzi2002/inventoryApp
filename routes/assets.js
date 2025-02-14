const express = require('express');
const assetsRouter = express.Router();
const assetsController = require('../controllers/assetsController');
const path = require('path');

assetsRouter.get('/', assetsController.getAssets);
assetsRouter.get('/search', assetsController.searchAssets);
assetsRouter.get('/tables', assetsController.GetAllTables);

module.exports = assetsRouter;
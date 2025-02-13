const express = require('express');
const assetsRouter = express.Router();
const assetsController = require('../controllers/assetsController');

assetsRouter.use('/', assetsController.getAssets)

module.exports = assetsRouter;
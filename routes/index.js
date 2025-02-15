const express = require('express');
const indexRouter = express.Router();
const db = require('../db/queries');


indexRouter.get('/', async (req, res) => {
  res.render('index')
});

module.exports = indexRouter;
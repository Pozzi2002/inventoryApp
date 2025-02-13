const express = require('express');
const indexRouter = express.Router();
const db = require('../db/queries');


indexRouter.get('/', async (req, res) => {
  const getSums = await db.getSums()
  res.render('index', {getSums: getSums})
});

module.exports = indexRouter;
const express = require('express');
const path = require('node:path')
const app = express();
const indexRouter = require('./routes/index');
const assetsRouter = require('./routes/assets')
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();



app.use('/', indexRouter);
app.use('/assets', assetsRouter)

const pathpublic = path.join(__dirname, "public");
app.use(express.static(pathpublic));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
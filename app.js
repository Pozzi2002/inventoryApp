const express = require('express');
const path = require('node:path')
const app = express();
const indexRouter = require('./routes/index');
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();



app.get('/', indexRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
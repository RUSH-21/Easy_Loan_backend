const express = require('express')
var cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors());

app.use(express.json());
app.use(apiRouter);

module.exports = app;
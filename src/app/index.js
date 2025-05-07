const express = require('express');
const logger = require('../middlewares/logger');
const errorHandler = require('../middlewares/errorHandler');
const routes = require('../routes/index');

const { json } = require('body-parser');

const app = express();

app.use(json());
app.use(logger);
app.use(routes);
app.use(errorHandler);


app.listen(3001, () => console.log('http://localhost:3001'));

const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('../config/swagger');
const logger = require('../middlewares/logger');
const errorHandler = require('../middlewares/errorHandler');
const routes = require('../routes/index');

const { json } = require('body-parser');

const app = express();

app.use(json());
app.use(logger);
app.use(routes);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(3001, () => console.log('http://localhost:3001'));

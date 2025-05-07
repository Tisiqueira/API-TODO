const swaggerJSDoc = require('swagger-jsdoc');

const options = {

  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO api',
      version: '1.0.0',
      description:'documentation by Swagger'
    },
    server:[
      {
        url:'http://localhost:3001'
      },
    ],

  },
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

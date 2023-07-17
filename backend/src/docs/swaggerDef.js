const { version } = require('../../package.json');
const config = require('../configs/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Backend documentation',
    version,
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;

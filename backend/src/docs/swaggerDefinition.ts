import { version } from '../../package.json';
import { config } from '../configs';

const swaggerDefinition = {
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

export default swaggerDefinition;

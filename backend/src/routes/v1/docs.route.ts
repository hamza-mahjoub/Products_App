import express, { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '../../docs/swaggerDefinition';

const docsRouter: Router = express.Router();

const specs: Object = swaggerJsdoc({
  swaggerDefinition,
  apis: [`src/docs/*.yml`, `src/routes/v1/*.ts`, './dist/docs/*.yml', './dist/routes/v1/*.ts'],
});

docsRouter.use('/', swaggerUi.serve);
docsRouter.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  }),
);

export default docsRouter;

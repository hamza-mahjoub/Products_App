import express, { Router } from 'express';
import productRouter from './product.route';
import topicRouter from './topic.route';
import docsRouter from './docs.route';
import { config } from '../../configs';

const router: Router = express.Router();

const defaultRoutes = [
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/topics',
    route: topicRouter,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;

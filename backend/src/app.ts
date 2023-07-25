import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config, morgan } from './configs';
import routes from './routes/v1';
import { errorConverter, errorHandler } from './middlewares/error';

const app: Express = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.get('*', function (req, res) {
  res.send('404 Not Found!');
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;

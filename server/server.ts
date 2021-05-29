import express, { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';
import { BASE_ENDPOINT } from './constants';

const app: Express = express();

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/
app.set('json spaces', 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle logs in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
	app.use(cors());
}

// Handle security and origin in production
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

/************************************************************************************
 *                               Register all routes
 ***********************************************************************************/
app.use(BASE_ENDPOINT, routes);

/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/
app.get('*', (req, res) =>
	res.status(404).send({
		message: 'Page not found',
		success: false,
	}),
);

export default app;

export { app };

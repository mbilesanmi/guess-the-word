import express, { Router } from 'express';

import controllers from '../controllers';

const router = Router();
const { usersController } = controllers;

router.get('/', (_, res: express.Response) =>
	res.status(200).send({
		message: 'Welcome to the Guesses Quiz API!',
	}),
);

router.post('/users', usersController.create);

export default router;

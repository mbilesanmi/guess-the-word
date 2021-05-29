import express, { Router } from 'express';

const router = Router();

router.get('/', (_, res: express.Response) =>
	res.status(200).send({
		message: 'Welcome to the Guesses Quiz API!',
	}),
);

export default router;

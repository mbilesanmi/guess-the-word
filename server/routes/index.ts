import express, { Router } from 'express';

import controllers from '../controllers';

const router = Router();
const { usersController, questionsController } = controllers;

router.get('/', (_, res: express.Response) =>
	res.status(200).send({
		message: 'Welcome to the Guesses Quiz API!',
	}),
);

router.post('/users', usersController.create);
router.get('/users', usersController.list);
router.get('/user/:userId', usersController.getUser);

router.get('/question/:userId', questionsController.getWord);
router.put('/question/:questionId', questionsController.saveGuess);

export default router;

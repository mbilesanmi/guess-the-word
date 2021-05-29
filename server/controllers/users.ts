import express from 'express';
import models from '../models';

const { User, Question } = models;

export default {
	create(req: express.Request, res: express.Response) {
		return User.create({
			username: req.body.username,
		})
			.then((user: any) => res.status(201).send({ user }))
			.catch((error: Error) => res.status(400).send({ error }));
	},

	list(req: any, res: any) {
		return User.findAll({
			include: [
				{
					model: Question,
					as: 'attemptedQuestions',
				},
			],
		})
			.then((users: any) => res.status(200).send({ users }))
			.catch((error: Error) => res.status(400).send({ error }));
	},
};

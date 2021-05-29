import express from 'express';
import models from '../models';

const { User } = models;

export default {
	create(req: express.Request, res: express.Response) {
		return User.create({
			username: req.body.username,
		})
			.then((user: any) => res.status(201).send({ user }))
			.catch((error: Error) => res.status(400).send(error));
	},
};

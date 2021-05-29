import { rword } from 'rword';
import express from 'express';

import models from '../models';

const { Question } = models;

interface QuestionBody {
	word: any;
	userId: Number;
}

export default {
	async getWord(req: express.Request, res: express.Response) {
		const { userId } = req.params;
		const word = rword.generate();

		const questionBody: QuestionBody = {
			word,
			userId: parseInt(userId, 10),
		};

		try {
			const question = await Question.create(questionBody);

			return res.status(200).send({ question });
		} catch (error) {
			return res.status(400).send(error);
		}
	},
};

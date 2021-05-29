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
			return res.status(400).send({ error });
		}
	},

	async saveGuess(req: express.Request, res: express.Response) {
		const { questionId } = req.params;
		const { guesses } = req.body;

		try {
			const question = await Question.findByPk(questionId);

			if (!question) {
				return res.status(404).send({
					message: 'Question not found',
					status: 'failed',
				});
			}

			try {
				await question.update({
					guesses,
				});
				return res.status(200).send({ question });
			} catch (error) {
				return res.status(400).send({ error });
			}
		} catch (error) {
			return res.status(400).send({ error });
		}
	},
};

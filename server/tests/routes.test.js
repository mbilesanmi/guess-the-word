const supertest = require('supertest');

const { app } = require('../server');

const req = supertest(app);

describe('User routes', () => {
	it('should return no users when none exist', async () => {
		const res = await req.get('/api/users').expect(200);

		expect(res.body).toMatchObject({
			users: [],
		});
	});

	it('should create a new user successfully', async () => {
		const res = await req
			.post('/api/users')
			.send({
				username: 'test user',
			})
			.expect(201);

		expect(res.body).toHaveProperty('user');
		expect(res.body.user.id).toBe(1);
		expect(res.body.user.username).toBe('test user');
	});

	it('should return all users', async () => {
		const res = await req.get('/api/users').expect(200);

		expect(res.body).toHaveProperty('users');
		expect(res.body.users).toHaveLength(1);
	});
});

describe('Question routes', () => {
	it('should create and return a question successfully', async () => {
		await req.post('/api/users').send({
			username: 'test user',
		});
		const res = await req.get('/api/question/1').expect(200);

		expect(res.body).toHaveProperty('question');
		expect(res.body.question.id).toEqual(1);
		expect(res.body.question.userId).toEqual(1);
		expect(res.body.question.guesses).toBeNull();
	});
});

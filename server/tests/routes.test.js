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
		const res = await req.post('/api/users').send({ username: 'test user' }).expect(201);

		expect(res.body).toHaveProperty('user');
		expect(res.body.user.id).toBe(1);
		expect(res.body.user.username).toBe('test user');
	});

	it('should return all users', async () => {
		const res = await req.get('/api/users').expect(200);

		expect(res.body).toHaveProperty('users');
		expect(res.body.users).toHaveLength(1);
	});

	it("should return a user's info", async () => {
		let res = await req.get('/api/user/1').expect(200);

		expect(res.body).toHaveProperty('user');
		expect(res.body.user.id).toEqual(1);
		expect(res.body.user.username).toEqual('test user');
		expect(res.body.user.attemptedQuestions).toHaveLength(0);

		await req.get('/api/question/1');
		await req.put('/api/question/1').send({ guesses: 'test,e,s,t' });

		res = await req.get('/api/user/1').expect(200);

		expect(res.body).toHaveProperty('user');
		expect(res.body.user.id).toEqual(1);
		expect(res.body.user.attemptedQuestions).toHaveLength(1);
	});
});

describe('Question routes', () => {
	beforeAll(async () => {
		await req.post('/api/users').send({
			username: 'test user',
		});
	});

	it('should create and return a question successfully', async () => {
		const res = await req.get('/api/question/1').expect(200);

		expect(res.body).toHaveProperty('question');
		expect(res.body.question.userId).toEqual(1);
		expect(res.body.question.guesses).toBeNull();
	});

	it("should save and return a user's guess", async () => {
		const res = await req.put('/api/question/1').send({ guesses: 't,e,s,t' }).expect(200);

		expect(res.body).toHaveProperty('question');
		expect(res.body.question.userId).toEqual(1);
		expect(res.body.question.guesses).toEqual('t,e,s,t');
	});
});

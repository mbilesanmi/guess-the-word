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
	});

	it('should return all users', async () => {
		const res = await req.get('/api/users').expect(200);

		expect(res.body).toHaveProperty('users');
		expect(res.body.users).toHaveLength(1);
	});
});

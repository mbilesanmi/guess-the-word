const supertest = require('supertest');

const { app } = require('../server');

const req = supertest(app);

describe('User routes', () => {
	it('should create a new user successfully', async () => {
		const res = await req
			.post('/api/users')
			.send({
				username: 'test user',
			})
			.expect(201);

		expect(res.body).toHaveProperty('user');
	});
});

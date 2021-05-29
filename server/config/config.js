module.exports = {
	development: {
		use_env_variable: process.env.DATABASE_URL,
		dialect: 'postgres',
		logging: true,
	},
	test: {
		use_env_variable: process.env.TEST_DATABASE_URL,
		dialect: 'postgres',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};

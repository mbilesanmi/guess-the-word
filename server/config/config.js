require('dotenv').config();

module.exports = {
	development: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
		logging: true,
	},
	test: {
		use_env_variable: 'TEST_DATABASE_URL',
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

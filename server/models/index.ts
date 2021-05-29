import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const dbUrl = process.env[config.use_env_variable] || '';

const db: any = {};

const sequelize: any = config.use_env_variable
	? new Sequelize(dbUrl, config)
	: new Sequelize(config.database, config.username, config.password, config);

readdirSync(__dirname)
	.filter((file) => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
	})
	.forEach((file) => {
		const model = require(join(__dirname, file))(sequelize, DataTypes);

		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

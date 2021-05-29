import { Model, DataTypes } from 'sequelize';

export default (sequelize: any) => {
	const User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	User.associate = (models: any) => {};

	return User;
};

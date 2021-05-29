import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
	const User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	User.associate = (models: any) => {
		User.hasMany(models.Question, {
			foreignKey: 'userId',
			as: 'attemptedQuestions',
		});
	};

	return User;
};

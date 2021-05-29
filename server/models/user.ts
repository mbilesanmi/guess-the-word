import { DataTypes, Model } from 'sequelize';

interface UserAttributes {
	username: string;
}
export interface UserInstance extends Model<UserAttributes>, UserAttributes {
	id: Number;
	createdAt?: Date;
	updatedAt?: Date;
}

module.exports = (sequelize: any) => {
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

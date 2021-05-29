import { DataTypes, Model } from 'sequelize';

interface QuestionAttributes {
	word: string;
	guesses?: string;
}

export interface QuestionInstance extends Model<QuestionAttributes>, QuestionAttributes {
	id: Number;
	createdAt?: Date;
	updatedAt?: Date;
	userId: Number;
}

module.exports = (sequelize: any) => {
	const Question = sequelize.define('Question', {
		word: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		guesses: {
			type: DataTypes.STRING,
			defaultValue: null,
		},
	});

	Question.associate = (models: any) => {
		Question.belongsTo(models.User, {
			foreignKey: 'userId',
			onDelete: 'CASCADE',
			as: 'user',
		});
	};

	return Question;
};

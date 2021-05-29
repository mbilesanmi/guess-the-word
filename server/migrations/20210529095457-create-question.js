module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			word: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			guesses: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Users',
					key: 'id',
					as: 'userId',
				},
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable('Questions');
	},
};

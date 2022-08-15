'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      food_name: {
        type: Sequelize.STRING
      },
      food_price: {
        type: Sequelize.STRING
      },
      food_desc: {
        type: Sequelize.STRING
      },
      food_src: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('food');
  }
};
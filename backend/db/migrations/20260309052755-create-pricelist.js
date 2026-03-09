"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pricelists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      articleNo: {
        type: Sequelize.STRING,
      },
      product: {
        type: Sequelize.STRING,
      },
      inPrice: {
        type: Sequelize.DOUBLE,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      unit: {
        type: Sequelize.STRING,
      },
      inStock: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pricelists");
  },
};

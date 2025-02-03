const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const orderItemSchema = sequelize.define('OrderItem', {
    id: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'id',
        },
    },
    menu_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Menus',
            key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = orderItemSchema;

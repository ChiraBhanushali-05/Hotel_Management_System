const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/db'); 


const tableSchema = sequelize.define('Table', {
    id: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    },
    tableNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
    reservationStatus: {
        type: DataTypes.ENUM('reserved', 'available'),
        defaultValue: 'available',
      },
    seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    is_occupied:{
        type:DataTypes.BOOLEAN,
        defaultValue:false

    },
    superAdminId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: 'SuperAdmins',
        key: 'id',
    },
    },
},{
    timestamps: true,
  });

module.exports=tableSchema;
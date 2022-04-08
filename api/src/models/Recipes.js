const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    steps:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    createBD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }

  },{
    timestamps: false,
  });
};



/**
 * @model :["StockModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"stockId","type":"Id"},{"name":"quantity","type":"Integer"}]
 * @relations :["OrdersModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      
stockId: {
type: DataTypes.ID,
},
quantity: {
type: DataTypes.INTEGER,
},
    },{
      timestamps: false
    }
  );

  return Stock;
};
      
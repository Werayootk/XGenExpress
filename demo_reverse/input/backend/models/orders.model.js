

/**
 * @model :["OrdersModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"orderId","type":"Id"},{"name":"orderStatus","type":"String"},{"name":"orderTo","type":"String"},{"name":"orderQuantity","type":"Integer"}]
 * @relations :[]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      
orderId: {
type: DataTypes.ID,
},
orderStatus: {
type: DataTypes.STRING,
},
orderTo: {
type: DataTypes.STRING,
},
orderQuantity: {
type: DataTypes.INTEGER,
},
    },{
      timestamps: false
    }
  );

  return Orders;
};
      
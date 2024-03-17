

/**
 * @model :["OrderModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"orderId","type":"Id"},{"name":"orderStatus","type":"String"},{"name":"orderDate","type":"Date"}]
 * @relations :[]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      
orderId: {
type: DataTypes.Id,
},
orderStatus: {
type: DataTypes.String,
},
orderDate: {
type: DataTypes.Date,
},
    },{
      timestamps: false
    }
  );

  return Order;
};
      


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
type: DataTypes.ID,
},
orderStatus: {
type: DataTypes.STRING,
},
orderDate: {
type: DataTypes.DATE,
},
    },{
      timestamps: false
    }
  );

  return Order;
};
      
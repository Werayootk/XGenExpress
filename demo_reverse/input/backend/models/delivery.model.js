

/**
 * @model :["DeliveryModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"deliveryId","type":"Id"},{"name":"deliveryMethod","type":"String"},{"name":"deliveryStatus","type":"String"},{"name":"deliveryTo","type":"String"}]
 * @relations :[]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define(
    "Delivery",
    {
      
deliveryId: {
type: DataTypes.ID,
},
deliveryMethod: {
type: DataTypes.STRING,
},
deliveryStatus: {
type: DataTypes.STRING,
},
deliveryTo: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Delivery;
};
      
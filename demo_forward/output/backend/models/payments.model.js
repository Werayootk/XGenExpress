

/**
 * @model :["PaymentsModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"paymentId","type":"Id"},{"name":"paymentMethod","type":"String"},{"name":"paymentStatus","type":"String"}]
 * @relations :["InvoiceModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    "Payments",
    {
      
paymentId: {
type: DataTypes.ID,
},
paymentMethod: {
type: DataTypes.STRING,
},
paymentStatus: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Payments;
};
      
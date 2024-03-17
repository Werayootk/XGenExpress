

/**
 * @model :["SupplierModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"supplierId","type":"Id"},{"name":"name","type":"String"},{"name":"email","type":"String"},{"name":"phoneNumber","type":"String"},{"name":"address","type":"String"},{"name":"info","type":"String"},{"name":"photo","type":"String"}]
 * @relations :["OrderModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    "Supplier",
    {
      
supplierId: {
type: DataTypes.Id,
},
name: {
type: DataTypes.String,
},
email: {
type: DataTypes.String,
},
phoneNumber: {
type: DataTypes.String,
},
address: {
type: DataTypes.String,
},
info: {
type: DataTypes.String,
},
photo: {
type: DataTypes.String,
},
    },{
      timestamps: false
    }
  );

  return Supplier;
};
      
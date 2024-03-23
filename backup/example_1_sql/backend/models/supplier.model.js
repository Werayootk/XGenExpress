

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
type: DataTypes.ID,
},
name: {
type: DataTypes.STRING,
},
email: {
type: DataTypes.STRING,
},
phoneNumber: {
type: DataTypes.STRING,
},
address: {
type: DataTypes.STRING,
},
info: {
type: DataTypes.STRING,
},
photo: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Supplier;
};
      
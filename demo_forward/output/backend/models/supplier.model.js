

/**
 * @model :["SupplierModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"supplierId","type":"Id"},{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"role","type":"String"},{"name":"supplierName","type":"String"},{"name":"supplierInfo","type":"String"},{"name":"supplierPhoto","type":"String"},{"name":"supplierPhoneNumber","type":"String"}]
 * @relations :["OrdersModel","DeliveryModel","InvoiceModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    "Supplier",
    {
      
supplierId: {
type: DataTypes.ID,
},
userName: {
type: DataTypes.STRING,
},
passWord: {
type: DataTypes.STRING,
},
role: {
type: DataTypes.STRING,
},
supplierName: {
type: DataTypes.STRING,
},
supplierInfo: {
type: DataTypes.STRING,
},
supplierPhoto: {
type: DataTypes.STRING,
},
supplierPhoneNumber: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Supplier;
};
      
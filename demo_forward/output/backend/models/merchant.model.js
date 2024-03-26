

/**
 * @model :["MerchantModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"merchantId","type":"Id"},{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"role","type":"String"},{"name":"merchantName","type":"String"},{"name":"merchantInfo","type":"String"},{"name":"merchantPhoto","type":"String"},{"name":"merchantPhoneNumber","type":"String"}]
 * @relations :["ProductsModel","StockModel","OrdersModel","DeliveryModel","InvoiceModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define(
    "Merchant",
    {
      
merchantId: {
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
merchantName: {
type: DataTypes.STRING,
},
merchantInfo: {
type: DataTypes.STRING,
},
merchantPhoto: {
type: DataTypes.STRING,
},
merchantPhoneNumber: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Merchant;
};
      
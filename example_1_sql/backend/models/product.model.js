

/**
 * @model :["ProductModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"productId","type":"Id"},{"name":"productName","type":"String"},{"name":"sku","type":"String"},{"name":"category","type":"String"},{"name":"quantity","type":"Integer"},{"name":"price","type":"Float"},{"name":"description","type":"String"}]
 * @relations :["OrderModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      
productId: {
type: DataTypes.Id,
},
productName: {
type: DataTypes.String,
},
sku: {
type: DataTypes.String,
},
category: {
type: DataTypes.String,
},
quantity: {
type: DataTypes.Integer,
},
price: {
type: DataTypes.Float,
},
description: {
type: DataTypes.String,
},
    },{
      timestamps: false
    }
  );

  return Product;
};
      
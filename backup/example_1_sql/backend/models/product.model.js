

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
type: DataTypes.ID,
},
productName: {
type: DataTypes.STRING,
},
sku: {
type: DataTypes.STRING,
},
category: {
type: DataTypes.STRING,
},
quantity: {
type: DataTypes.INTEGER,
},
price: {
type: DataTypes.FLOAT,
},
description: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Product;
};
      


/**
 * @model :["ProductsModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"productId","type":"Id"},{"name":"productName","type":"String"},{"name":"category","type":"String"},{"name":"price","type":"Float"},{"name":"description","type":"String"},{"name":"sku","type":"String"}]
 * @relations :["StockModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      
productId: {
type: DataTypes.ID,
},
productName: {
type: DataTypes.STRING,
},
category: {
type: DataTypes.STRING,
},
price: {
type: DataTypes.FLOAT,
},
description: {
type: DataTypes.STRING,
},
sku: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Products;
};
      
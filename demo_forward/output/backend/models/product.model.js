

/**
 * @model :["ProductModel"]
 * @database :["MongoDB"]
 * @attribute :[{"name":"productId","type":"Id"},{"name":"productName","type":"String"},{"name":"sku","type":"String"},{"name":"category","type":"String"},{"name":"quantity","type":"Integer"},{"name":"price","type":"Float"},{"name":"description","type":"String"}]
 * @relations :["MerchantModel"]
 */
  
const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    
  productId: {
    type: Id
  },
    
  productName: {
    type: String
  },
    
  sku: {
    type: String
  },
    
  category: {
    type: String
  },
    
  quantity: {
    type: Integer
  },
    
  price: {
    type: Float
  },
    
  description: {
    type: String
  },
    
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
  
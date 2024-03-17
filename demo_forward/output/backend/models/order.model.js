

/**
 * @model :["OrderModel"]
 * @database :["MongoDB"]
 * @attribute :[{"name":"orderId","type":"Id"},{"name":"orderStatus","type":"String"},{"name":"orderDate","type":"Date"}]
 * @relations :["ProductModel","SupplierModel","MerchantModel"]
 */
  
const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    
  orderId: {
    type: Id
  },
    
  orderStatus: {
    type: String
  },
    
  orderDate: {
    type: Date
  },
    
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
  
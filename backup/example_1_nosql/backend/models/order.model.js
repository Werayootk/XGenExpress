
  
  /**
   * @model :["OrderModel"]
   * @database :["MongoDB"]
   * @attribute :[{"name":"orderId","type":"Id"},{"name":"orderStatus","type":"String"},{"name":"orderDate","type":"Date"}]
   * @relations :["ProductModel","SupplierModel","MerchantModel"]
   */
  
  class Order {
    constructor() {
      this.schema = new mongoose.Schema({
        orderId: {
      type: Id
    },orderStatus: {
      type: String
    },orderDate: {
      type: Date
    },              
      });
      this.model = mongoose.model('Order', this.schema);
    }
  }
  
  module.exports = Order;
  
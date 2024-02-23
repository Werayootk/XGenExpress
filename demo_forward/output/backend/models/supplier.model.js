
  
  /**
   * @model :["SupplierModel"]
   * @database :["MongoDB"]
   * @attribute :[{"name":"supplierId","type":"Id"},{"name":"name","type":"String"},{"name":"email","type":"String"},{"name":"phoneNumber","type":"String"},{"name":"address","type":"String"},{"name":"info","type":"String"},{"name":"photo","type":"String"}]
   * @relations :["UserModel"]
   */
  
  class Supplier {
    constructor() {
      this.schema = new mongoose.Schema({
        supplierId: {
      type: Id
    },name: {
      type: String
    },email: {
      type: String
    },phoneNumber: {
      type: String
    },address: {
      type: String
    },info: {
      type: String
    },photo: {
      type: String
    },              
      });
      this.model = mongoose.model('Supplier', this.schema);
    }
  }
  
  module.exports = Supplier;
  

  
  /**
   * @model :["MerchantModel"]
   * @database :["MongoDB"]
   * @attribute :[{"name":"merchantId","type":"Id"},{"name":"name","type":"String"},{"name":"email","type":"String"},{"name":"phoneNumber","type":"String"},{"name":"address","type":"String"},{"name":"info","type":"String"},{"name":"photo","type":"String"}]
   * @relations :["UserModel"]
   */
  
  class Merchant {
    constructor() {
      this.schema = new mongoose.Schema({
        merchantId: {
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
      this.model = mongoose.model('Merchant', this.schema);
    }
  }
  
  module.exports = Merchant;
  
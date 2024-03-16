
  
  /**
   * @model :["UserModel"]
   * @database :["MongoDB"]
   * @attribute :[{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"userId","type":"Id"},{"name":"role","type":"Boolean"}]
   * @relations :[]
   */
  
  class User {
    constructor() {
      this.schema = new mongoose.Schema({
        userName: {
      type: String
    },passWord: {
      type: String
    },userId: {
      type: Id
    },role: {
      type: Boolean
    },              
      });
      this.model = mongoose.model('User', this.schema);
    }
  }
  
  module.exports = User;
  
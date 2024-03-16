
  
  /**
   * @model :["ImageModel"]
   * @database :["MongoDB"]
   * @attribute :[{"name":"imageId","type":"Id"},{"name":"fileName","type":"String"},{"name":"filePath","type":"String"}]
   * @relations :["ProductModel"]
   */
  
  class Image {
    constructor() {
      this.schema = new mongoose.Schema({
        imageId: {
      type: Id
    },fileName: {
      type: String
    },filePath: {
      type: String
    },              
      });
      this.model = mongoose.model('Image', this.schema);
    }
  }
  
  module.exports = Image;
  
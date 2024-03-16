
      
      /**
       * @model :["ImageModel"]
       * @database :["MySql"]
       * @attribute :[{"name":"imageId","type":"Id"},{"name":"fileName","type":"String"},{"name":"filePath","type":"String"}]
       * @relations :["ProductModel"]
       */
      
      class Image extends Model {}
        Image.init(
          {
            imageId: {
          type: DataTypes.Id,
        },fileName: {
          type: DataTypes.String,
        },filePath: {
          type: DataTypes.String,
        },
          },
          {
            sequelize,
            modelName: 'Image',
            tableName: 'images',
            timestamps: false,
          }
        );
        module.exports = Image;
      


/**
 * @model :["ImageModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"imageId","type":"Id"},{"name":"fileName","type":"String"},{"name":"filePath","type":"String"}]
 * @relations :["ProductModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      
imageId: {
type: DataTypes.Id,
},
fileName: {
type: DataTypes.String,
},
filePath: {
type: DataTypes.String,
},
    },{
      timestamps: false
    }
  );

  return Image;
};
      
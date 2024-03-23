

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
type: DataTypes.ID,
},
fileName: {
type: DataTypes.STRING,
},
filePath: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Image;
};
      
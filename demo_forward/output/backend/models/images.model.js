

/**
 * @model :["ImagesModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"imageId","type":"Id"},{"name":"fileName","type":"String"},{"name":"filePath","type":"String"},{"name":"fileType","type":"String"},{"name":"fileSize","type":"String"}]
 * @relations :["ProductsModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define(
    "Images",
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
fileType: {
type: DataTypes.STRING,
},
fileSize: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Images;
};
      
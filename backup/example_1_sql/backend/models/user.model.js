

/**
 * @model :["UserModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"userId","type":"Id"},{"name":"role","type":"Boolean"}]
 * @relations :["SupplierModel","MerchantModel"]
 */
      
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      
userName: {
type: DataTypes.STRING,
},
passWord: {
type: DataTypes.STRING,
},
userId: {
type: DataTypes.ID,
},
role: {
type: DataTypes.BOOLEAN,
},
    },{
      timestamps: false
    }
  );

  return User;
};
      
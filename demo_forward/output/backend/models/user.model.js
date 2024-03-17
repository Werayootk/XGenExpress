

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
type: DataTypes.String,
},
passWord: {
type: DataTypes.String,
},
userId: {
type: DataTypes.Id,
},
role: {
type: DataTypes.Boolean,
},
    },{
      timestamps: false
    }
  );

  return User;
};
      
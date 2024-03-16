
      
      /**
       * @model :["UserModel"]
       * @database :["MySql"]
       * @attribute :[{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"userId","type":"Id"},{"name":"role","type":"Boolean"}]
       * @relations :["SupplierModel","MerchantModel"]
       */
      
      class User extends Model {}
        User.init(
          {
            userName: {
          type: DataTypes.String,
        },passWord: {
          type: DataTypes.String,
        },userId: {
          type: DataTypes.Id,
        },role: {
          type: DataTypes.Boolean,
        },
          },
          {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: false,
          }
        );
        module.exports = User;
      

      
      /**
       * @model :["MerchantModel"]
       * @database :["MySql"]
       * @attribute :[{"name":"merchantId","type":"Id"},{"name":"name","type":"String"},{"name":"email","type":"String"},{"name":"phoneNumber","type":"String"},{"name":"address","type":"String"},{"name":"info","type":"String"},{"name":"photo","type":"String"}]
       * @relations :["ProductModel","OrderModel"]
       */
      
      class Merchant extends Model {}
        Merchant.init(
          {
            merchantId: {
          type: DataTypes.Id,
        },name: {
          type: DataTypes.String,
        },email: {
          type: DataTypes.String,
        },phoneNumber: {
          type: DataTypes.String,
        },address: {
          type: DataTypes.String,
        },info: {
          type: DataTypes.String,
        },photo: {
          type: DataTypes.String,
        },
          },
          {
            sequelize,
            modelName: 'Merchant',
            tableName: 'merchants',
            timestamps: false,
          }
        );
        module.exports = Merchant;
      
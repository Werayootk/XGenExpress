
      
      /**
       * @model :["OrderModel"]
       * @database :["MySql"]
       * @attribute :[{"name":"orderId","type":"Id"},{"name":"orderStatus","type":"String"},{"name":"orderDate","type":"Date"}]
       * @relations :[]
       */
      
      class Order extends Model {}
        Order.init(
          {
            orderId: {
          type: DataTypes.Id,
        },orderStatus: {
          type: DataTypes.String,
        },orderDate: {
          type: DataTypes.Date,
        },
          },
          {
            sequelize,
            modelName: 'Order',
            tableName: 'orders',
            timestamps: false,
          }
        );
        module.exports = Order;
      
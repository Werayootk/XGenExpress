

/**
 * @model :["InvoiceModel"]
 * @database :["MySql"]
 * @attribute :[{"name":"invoiceId","type":"Id"},{"name":"invoicePrice","type":"Float"},{"name":"invoiceStatus","type":"String"},{"name":"invoiceTo","type":"String"}]
 * @relations :[]
 */
      
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      
invoiceId: {
type: DataTypes.ID,
},
invoicePrice: {
type: DataTypes.FLOAT,
},
invoiceStatus: {
type: DataTypes.STRING,
},
invoiceTo: {
type: DataTypes.STRING,
},
    },{
      timestamps: false
    }
  );

  return Invoice;
};
      
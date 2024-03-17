

/**
 * @model :["SupplierModel"]
 * @database :["MongoDB"]
 * @attribute :[{"name":"supplierId","type":"Id"},{"name":"name","type":"String"},{"name":"email","type":"String"},{"name":"phoneNumber","type":"String"},{"name":"address","type":"String"},{"name":"info","type":"String"},{"name":"photo","type":"String"}]
 * @relations :["UserModel"]
 */
  
const mongoose = require("mongoose");
const supplierSchema = mongoose.Schema(
  {
    
  supplierId: {
    type: Id
  },
    
  name: {
    type: String
  },
    
  email: {
    type: String
  },
    
  phoneNumber: {
    type: String
  },
    
  address: {
    type: String
  },
    
  info: {
    type: String
  },
    
  photo: {
    type: String
  },
    
  },
  {
    timestamps: true,
  }
);
const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
  
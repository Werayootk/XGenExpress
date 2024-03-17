

/**
 * @model :["UserModel"]
 * @database :["MongoDB"]
 * @attribute :[{"name":"userName","type":"String"},{"name":"passWord","type":"String"},{"name":"userId","type":"Id"},{"name":"role","type":"Boolean"}]
 * @relations :[]
 */
  
const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    
  userName: {
    type: String
  },
    
  passWord: {
    type: String
  },
    
  userId: {
    type: Id
  },
    
  role: {
    type: Boolean
  },
    
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
  
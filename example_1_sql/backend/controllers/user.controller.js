
/**
 * @controllerName :["verifyUser"]
 * @className :["UserController"]
 */
const asyncHandler = require("express-async-handler");
      
const verifyUser = asyncHandler(async (req, res) => { 
    res.send('verifyUser');
})

module.exports = {
    verifyUser
}
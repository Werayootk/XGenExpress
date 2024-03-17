
/**
 * @controllerName :["getSupplierInfo","updateSupplierInfo","login","logout","register"]
 * @className :["SupplierController"]
 */

const asyncHandler = require("express-async-handler");
      
const getSupplierInfo = asyncHandler(async (req, res) => { 
    res.send('getSupplierInfo');
})

const updateSupplierInfo = asyncHandler(async (req, res) => { 
    res.send('updateSupplierInfo');
})

const login = asyncHandler(async (req, res) => {
    res.send('login');
 })

const logout = asyncHandler(async (req, res) => { 
    res.send('logout');
})

const register = asyncHandler(async (req, res) => { 
    res.send('register');
})

module.exports = {
    getSupplierInfo,
    updateSupplierInfo,
    login,
    logout,
    register
}

/**
 * @controllerName :["getMerchantInfo","updateMerchantInfo","login","logout","register"]
 * @className :["MerchantController"]
 */
      
const asyncHandler = require("express-async-handler");

const getMerchantInfo = asyncHandler(async (req, res) => { 
    res.send('getMerchantInfo');
})

const updateMerchantInfo = asyncHandler(async (req, res) => { 
    res.send('updateMerchantInfo');
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
    getMerchantInfo,
    updateMerchantInfo,
    login,
    logout,
    register
}

/**
 * @controllerName :["getProductImage","updateProductImage","deleteProductImage","createProductImage"]
 * @className :["ImageController"]
 */

const asyncHandler = require("express-async-handler");
      
const getProductImage = asyncHandler(async (req, res) => { 
    res.send('getProductImage');
})

const updateProductImage = asyncHandler(async (req, res) => { 
    res.send('updateProductImage');
})

const deleteProductImage = asyncHandler(async (req, res) => { 
    res.send('deleteProductImage');
})

const createProductImage = asyncHandler(async (req, res) => {
    res.send('createProductImage');
 })

module.exports = {
    getProductImage,
    updateProductImage,
    deleteProductImage,
    createProductImage
}
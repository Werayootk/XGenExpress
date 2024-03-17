
/**
 * @controllerName :["getProducts","getProduct","createProduct","updateProduct","deleteProduct"]
 * @className :["ProductController"]
 */

const asyncHandler = require("express-async-handler");
      
const getProducts = asyncHandler(async (req, res) => { 
    res.send('getProducts');
})

const getProduct = asyncHandler(async (req, res) => { 
    res.send('getProduct');
})

const createProduct = asyncHandler(async (req, res) => { 
    res.send('createProduct');
})

const updateProduct = asyncHandler(async (req, res) => { 
    res.send('updateProduct');
})

const deleteProduct = asyncHandler(async (req, res) => { 
    res.send('deleteProduct');
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
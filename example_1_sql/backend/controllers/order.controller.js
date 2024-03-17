
/**
 * @controllerName :["createOrder","updateOrder","getOrder"]
 * @className :["OrderController"]
 */
const asyncHandler = require("express-async-handler");
    

const createOrder = asyncHandler(async (req, res) => {
    res.send('createOrder');
 })

const updateOrder = asyncHandler(async (req, res) => {
    res.send('updateOrder');
 })

const getOrder = asyncHandler(async (req, res) => {
    res.send('getOrder');
 })

module.exports = {
    createOrder,
    updateOrder,
    getOrder
}
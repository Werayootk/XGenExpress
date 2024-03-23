
/**
 * @route :["OrdersRoute","OrdersRoute","OrderRoute"]
 * @methodName :["GET","POST","PUT"]
 * @controllerName :["getOrders","createOrder","updateOrder"]
 * @dependency :[{"name":"OrdersRoute","value":":orderId","supplier":"OrderRoute"}]
 */

const express = require("express");
const router = express.Router();

const { getOrder, createOrder, updateOrder } = require('../controllers/order.controller');
        
router.get("/orders/getOrder", getOrder);
router.post("/orders/createOrder", createOrder);
router.put("/orders/order:orderId/updateOrder", updateOrder);

module.exports = router;
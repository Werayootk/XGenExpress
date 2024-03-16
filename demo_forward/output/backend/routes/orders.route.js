
/**
 * @route :["OrdersRoute","OrdersRoute","OrderRoute"]
 * @methodName :["GET","POST","PUT"]
 * @controllerName :["getOrders","createOrder","updateOrder"]
 * @dependency :[{"name":"OrdersRoute","value":":orderId","supplier":"OrderRoute"}]
 */
        
router.get("/orders/getOrders", getOrders);
router.post("/orders/createOrder", createOrder);
router.put("/orders/order:orderId/updateOrder", updateOrder);
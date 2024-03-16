
/**
 * @route :["OrdersRoute","OrdersRoute","OrderRoute"]
 * @methodName :["GET","POST","PUT"]
 * @controllerName :["getOrders","createOrder","updateOrder"]
 * @dependency :[{"name":"OrdersRoute","value":":orderId","supplier":"OrderRoute"}]
 */
        
router.get("/orders", getOrders);
router.post("/orders", createOrder);
router.put("/orders/order:orderId", updateOrder);
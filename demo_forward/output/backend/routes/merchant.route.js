
/**
 * @route :["MerchantRoute","MerchantRoute","MerchantRoute","MerchantRoute","MerchantRoute","OrdersRoute","OrdersRoute","OrderRoute","OrderRoute","StocksRoute","StocksRoute","StocksRoute","StockRoute"]
 * @methodName :["POST","GET","POST","POST","POST","GET","POST","GET","POST","GET","GET","POST","POST"]
 * @controllerName :["login","logout","register","updateInfo","forgetPassword","getOrders","createOrder","getOrder","updateOrder","getOutOfStock","getStock","createStock","updateStock"]
 * @dependency :[{"name":"MerchantRoute","value":":merchantId","supplier":"OrdersRoute"},{"name":"MerchantRoute","value":":merchantId","supplier":"StocksRoute"},{"name":"OrdersRoute","value":":orderId","supplier":"OrderRoute"},{"name":"StocksRoute","value":":stockId","supplier":"StockRoute"}]
 */

const express = require("express");

const router = express.Router();
        
router.post("/merchant/login", login);
router.get("/merchant/logout", logout);
router.post("/merchant/register", register);
router.post("/merchant/updateInfo", updateInfo);
router.post("/merchant/forgetPassword", forgetPassword);
router.get("/merchant/orders:merchantId/getOrders", getOrders);
router.post("/merchant/orders:merchantId/createOrder", createOrder);
router.get("/merchant/orders:merchantid/order:orderId/getOrder", getOrder);
router.post("/merchant/orders:merchantid/order:orderId/updateOrder", updateOrder);
router.get("/merchant/stocks:merchantId/getOutOfStock", getOutOfStock);
router.get("/merchant/stocks:merchantId/getStock", getStock);
router.post("/merchant/stocks:merchantId/createStock", createStock);
router.post("/merchant/stocks:merchantid/stock:stockId/updateStock", updateStock);

module.exports = router;
      
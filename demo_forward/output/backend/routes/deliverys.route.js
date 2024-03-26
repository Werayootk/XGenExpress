
/**
 * @route :["DeliverysRoute","DeliverysRoute","DeliveryRoute"]
 * @methodName :["POST","GET","POST"]
 * @controllerName :["createDelivery","getDelivery","updateDelivery"]
 * @dependency :[{"name":"DeliverysRoute","value":":deliveryId","supplier":"DeliveryRoute"}]
 */

const express = require("express");

const router = express.Router();
        
router.post("/deliverys/createDelivery", createDelivery);
router.get("/deliverys/getDelivery", getDelivery);
router.post("/deliverys/delivery:deliveryId/updateDelivery", updateDelivery);

module.exports = router;
      
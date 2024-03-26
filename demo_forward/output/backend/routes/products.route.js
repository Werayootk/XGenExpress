
/**
 * @route :["ProductsRoute","ProductsRoute","ProductRoute","ProductRoute","ProductRoute","ImageRoute","ImageRoute","ImageRoute"]
 * @methodName :["POST","GET","POST","DELETE","GET","GET","POST","POST"]
 * @controllerName :["createProduct","getProducts","updateProduct","deleteProduct","getProduct","getImage","updateImage","createImage"]
 * @dependency :[{"name":"ProductsRoute","value":":productId","supplier":"ProductRoute"},{"name":"ProductsRoute","value":":productId","supplier":"ImageRoute"}]
 */

const express = require("express");

const router = express.Router();
        
router.post("/products/createProduct", createProduct);
router.get("/products/getProducts", getProducts);
router.post("/products/product:productId/updateProduct", updateProduct);
router.delete("/products/product:productId/deleteProduct", deleteProduct);
router.get("/products/product:productId/getProduct", getProduct);
router.get("/products/image:productId/getImage", getImage);
router.post("/products/image:productId/updateImage", updateImage);
router.post("/products/image:productId/createImage", createImage);

module.exports = router;
      
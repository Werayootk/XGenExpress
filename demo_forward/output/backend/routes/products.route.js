
/**
 * @route :["ProductsRoute","ProductsRoute","ProductRoute","ProductRoute","ProductRoute","ImageRoute","ImageRoute","ImageRoute","ImageRoute"]
 * @methodName :["GET","POST","GET","PUT","DELETE","GET","PUT","POST","DELETE"]
 * @controllerName :["getProducts","createProduct","getProduct","updateProduct","deleteProduct","getProductImage","updateProductImage","createProductImage","deleteProductImage"]
 * @dependency :[{"name":"ProductsRoute","value":":productId","supplier":"ProductRoute"},{"name":"ProductsRoute","value":":productId","supplier":"ImageRoute"}]
 */
        
router.get("/products/getProducts", getProducts);
router.post("/products/createProduct", createProduct);
router.get("/products/product:productId/getProduct", getProduct);
router.put("/products/product:productId/updateProduct", updateProduct);
router.delete("/products/product:productId/deleteProduct", deleteProduct);
router.get("/products/image:productId/getProductImage", getProductImage);
router.put("/products/image:productId/updateProductImage", updateProductImage);
router.post("/products/image:productId/createProductImage", createProductImage);
router.delete("/products/image:productId/deleteProductImage", deleteProductImage);
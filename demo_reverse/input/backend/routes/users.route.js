
/**
 * @route :["UsersRoute","UsersRoute","UsersRoute","SupplierRoute","SupplierRoute","MerchantRoute","MerchantRoute"]
 * @methodName :["POST","POST","GET","GET","PUT","GET","PUT"]
 * @controllerName :["register","login","logout","getSupplierInfo","updateSupplierInfo","getMerchantInfo","updateMerchantInfo"]
 * @dependency :[{"name":"UsersRoute","value":":userId","supplier":"SupplierRoute"},{"name":"UsersRoute","value":":userId","supplier":"MerchantRoute"}]
 */
        
router.post("/users", register);
router.post("/users", login);
router.get("/users", logout);
router.get("/users/supplier:userId", getSupplierInfo);
router.put("/users/supplier:userId", updateSupplierInfo);
router.get("/users/merchant:userId", getMerchantInfo);
router.put("/users/merchant:userId", updateMerchantInfo);
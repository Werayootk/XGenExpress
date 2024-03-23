
/**
 * @route :["UsersRoute","UsersRoute","UsersRoute","SupplierRoute","SupplierRoute","MerchantRoute","MerchantRoute"]
 * @methodName :["POST","POST","GET","GET","PUT","GET","PUT"]
 * @controllerName :["register","login","logout","getSupplierInfo","updateSupplierInfo","getMerchantInfo","updateMerchantInfo"]
 * @dependency :[{"name":"UsersRoute","value":":userId","supplier":"SupplierRoute"},{"name":"UsersRoute","value":":userId","supplier":"MerchantRoute"}]
 */
        
const express = require("express");
const router = express.Router();

const { getSupplierInfo, updateSupplierInfo } = require('../controllers/supplier.controller')
const { getMerchantInfo, updateMerchantInfo } = require('../controllers/merchant.controller')

router.get("/users/supplier:userId/getSupplierInfo", getSupplierInfo);
router.put("/users/supplier:userId/updateSupplierInfo", updateSupplierInfo);
router.get("/users/merchant:userId/getMerchantInfo", getMerchantInfo);
router.put("/users/merchant:userId/updateMerchantInfo", updateMerchantInfo);

module.exports = router;
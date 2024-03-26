
/**
 * @route :["SupplierRoute","SupplierRoute","SupplierRoute","SupplierRoute","SupplierRoute","InvoicesRoute","InvoicesRoute","InvoiceRoute","PaymentsRoute","PaymentsRoute","PaymentRoute"]
 * @methodName :["POST","GET","POST","POST","POST","GET","POST","POST","GET","POST","POST"]
 * @controllerName :["login","logout","register","updateInfo","forgetPassword","getInvoice","createInvoice","updateInvoice","getPayment","createPayment","updatePayment"]
 * @dependency :[{"name":"SupplierRoute","value":":supplierId","supplier":"InvoicesRoute"},{"name":"SupplierRoute","value":":supplierId","supplier":"PaymentsRoute"},{"name":"InvoicesRoute","value":":invoiceId","supplier":"InvoiceRoute"},{"name":"PaymentsRoute","value":":paymentId","supplier":"PaymentRoute"}]
 */

const express = require("express");

const router = express.Router();
        
router.post("/supplier/login", login);
router.get("/supplier/logout", logout);
router.post("/supplier/register", register);
router.post("/supplier/updateInfo", updateInfo);
router.post("/supplier/forgetPassword", forgetPassword);
router.get("/supplier/invoices:supplierId/getInvoice", getInvoice);
router.post("/supplier/invoices:supplierId/createInvoice", createInvoice);
router.post("/supplier/invoices:supplierid/invoice:invoiceId/updateInvoice", updateInvoice);
router.get("/supplier/payments:supplierId/getPayment", getPayment);
router.post("/supplier/payments:supplierId/createPayment", createPayment);
router.post("/supplier/payments:supplierid/payment:paymentId/updatePayment", updatePayment);

module.exports = router;
      
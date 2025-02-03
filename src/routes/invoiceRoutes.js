const express = require("express");
const { generateInvoice, getInvoice, getAllInvoices,updateInvoiceStatus } = require("../controllers/invoiceController");
const router = express.Router();

router.get("/pdf/:invoiceId", generateInvoice); 
router.get("/:invoiceId", getInvoice);          
router.put("/:invoiceId", updateInvoiceStatus); 
router.get("/", getAllInvoices);

module.exports = router;

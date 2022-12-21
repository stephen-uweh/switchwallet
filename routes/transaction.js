const express = require("express");
const router = express.Router();
const transaction = require("../controllers/transaction");

router.post('/clientWithdrawal', transaction.create.clientWithdrawal);

module.exports = router;
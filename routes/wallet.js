const express = require("express");
const router = express.Router();
const wallet = require("../controllers/wallet");

router.post('/createWallet', wallet.create.createWallet);

module.exports = router;
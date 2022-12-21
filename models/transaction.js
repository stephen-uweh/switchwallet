const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid").v1;
var Float = require("mongoose-float").loadType(mongoose);

const transactionSchema = new mongoose.Schema(
    {
        destinationAddress: {
            required: true,
            type: String
        },
        paymentCurrency: {
            type: Number
        },
        networkChain: {
            type: Number
        },
        withdrawnAmount: {
            type: Float
        },
        transactionCharge: {
            type: Float
        },
        withdrawnAmountRequested: {
            type: Float
        },
        paymentDescription: {
            type: String
        },
        merchantTransactionReference: {
            type: String
        },
        switchWalletTransactionReference: {
            type: String
        },
        transactionChargeCurrency: {
            type: Number
        }

    }
);

const Transaction = mongoose.model('transactions', transactionSchema)
module.exports = Transaction;
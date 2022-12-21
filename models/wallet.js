const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
    {
        walletAddress: {
            required: true,
            type: String
        },
        merchantClientId: {
            required: true,
            type: String
        },
        addressGenerationStatus: {
            type: Number
        },
        addressGenerationMessage: {
            type: String
        },
        addressGenerationTransactionHash: {
            type: String
        }
    }
);

const Wallet = mongoose.model('wallets', walletSchema)
module.exports = Wallet;
const { JsonResponse } = require("../../lib/apiResponse");
const { MSG_SUCCESS, MSG_TYPES, MSG_ERRORS, SUPPORTED_INTEGRATIONS } = require("../../constant/msg");
const Transaction = require('../../models/transaction');
const { default: mongoose } = require("mongoose");


exports.allTransactions = async (req, res) => {
    let transaction = await Transaction.find();
    return JsonResponse(res, 200, MSG_SUCCESS.FETCHED_RESOURCE('Transactions'), transaction, null);
}


exports.singleTransaction = async(req, res) => {

    let transactionId = new mongoose.Types.ObjectId(req.params.transactionId)

    let transaction = await Transaction.findOne({_id:transactionId});

    return JsonResponse(res, 200, MSG_SUCCESS.FETCHED_RESOURCE('Transaction'), transaction, null);
} 
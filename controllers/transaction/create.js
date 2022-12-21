const { JsonResponse } = require("../../lib/apiResponse");
const { MSG_SUCCESS, MSG_TYPES, MSG_ERRORS, SUPPORTED_INTEGRATIONS } = require("../../constant/msg");
const Transaction = require('../../models/transaction');
const axios = require('axios');

exports.clientWithdrawal = async(req, res) => {
    const headers = {
        "Authorization": "ApiKey " + process.env.SECRET_API_KEY
    }
    let data = {
        merchantClientEmailAddress: req.body.merchantClientEmailAddress,
        destinationAddress: req.body.destinationAddress,
        amount: req.body.amount,
        currency: req.body.currency,
        networkChain: req.body.networkChain,
        merchantReference: req.body.merchantReference,
        publicKey: process.env.PUBLIC_API_KEY

    }
    const response = await axios.post('https://testnet.switchwallet.io/api/v1/merchantClientWithdrawal', data, {headers});
    if (response.status == 200){
        let resp = response.data.data;

        let payload = {
            destinationAddress: resp.destinationAddress,
            paymentCurrency: resp.paymentCurrency,
            networkChain: resp.networkChain,
            withdrawnAmount: resp.withdrawnAmount,
            transactionCharge: resp.transactionCharge,
            withdrawnAmountRequested: resp.withdrawnAmountRequested,
            paymentDescription: resp.paymentDescription,
            merchantTransactionReference: resp.merchantTransactionReference,
            switchWalletTransactionReference: resp.switchWalletTransactionReference,
            transactionChargeCurrency: resp.transactionChargeCurrency
        }

        let transaction = new Transaction(payload);
        await transaction.save();

        return JsonResponse(res, 200, MSG_SUCCESS.CREATED_RESOURCE('Transaction'), transaction, null);
    }
}
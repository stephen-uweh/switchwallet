const { JsonResponse } = require("../../lib/apiResponse");
const { MSG_SUCCESS, MSG_TYPES, MSG_ERRORS, SUPPORTED_INTEGRATIONS } = require("../../constant/msg");
const Wallet = require('../../models/wallet');
const axios = require('axios');

exports.createWallet = async(req, res) => {
    const headers = {
        "Authorization": "ApiKey " + process.env.SECRET_API_KEY
    }
    let data = {
        clientEmailAddress: req.body.clientEmailAddress,
        currency: req.body.currency,
        networkChain: req.body.networkChain,
        publicKey: process.env.PUBLIC_API_KEY
    }
    const response = await axios.post('https://testnet.switchwallet.io/api/v1/walletaddress/generate', data, {headers});
    if (response.status == 200){
        let resp = response.data.data

        let payload = {
            walletAddress: resp.address,
            merchantClientId: resp.merchantClientId,
            addressGenerationStatus: resp.addressGenerationStatus,
            addressGenerationMessage: resp.addressGenerationMessage || null,
            addressGenerationTransactionHash: respaddressGenerationTransactionHash || null
        }

        let wallet = new Wallet(payload);
        await wallet.save();

        return JsonResponse(res, 200, MSG_SUCCESS.CREATED_RESOURCE('Wallet'), wallet, null);
    }
}
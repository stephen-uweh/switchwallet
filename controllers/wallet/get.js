const { JsonResponse } = require("../../lib/apiResponse");
const { MSG_SUCCESS, MSG_TYPES, MSG_ERRORS, SUPPORTED_INTEGRATIONS } = require("../../constant/msg");
const Wallet = require('../../models/wallet');


exports.allWallets = async (req, res) => {
    let wallets = await Wallet.find();
    return JsonResponse(res, 200, MSG_SUCCESS.FETCHED_RESOURCE('Wallets'), wallets, null);
}


exports.singleWallet = async(req, res) => {

    let wallet = await Wallet.findOne({walletAddress: req.params.walletAddress});

    return JsonResponse(res, 200, MSG_SUCCESS.FETCHED_RESOURCE('Wallet'), wallet, null);
} 
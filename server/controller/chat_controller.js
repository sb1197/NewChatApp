const chatService = require('../services/chat_services');

exports.dashboard = (req, res) => {
    var responseResult = {};
    chatService.dashboard(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        } else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}
const chatModel = require('../app/models/chat_models');

exports.dashboard = (data, callback) => {
    chatModel.save(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
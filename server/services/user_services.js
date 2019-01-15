const userModel = require('../app/models/user_models');

exports.registration = (data, callback) => {
    userModel.save(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
exports.login = (data, callback) => {
    userModel.findOne(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
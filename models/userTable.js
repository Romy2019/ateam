var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {type: String, required: [true, 'user name must be provided']},
    userEmail: {type: String, required: [true, 'user type should be provided']},
    userAge: {type: String, required: [true, 'user type should be provided']},
    userDob: {type: String, required: [true, 'user type should be provided']},
    userPhoto: {type: String, required: [true, 'user type should be provided']},
});
var userTable = mongoose.model('userTable', userSchema);
module.exports = {userTable};

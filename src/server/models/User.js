/**
 *  Create Schema for User
 */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', UserSchema);
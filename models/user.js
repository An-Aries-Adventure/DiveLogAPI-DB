const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },

    
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, firstName: this.firstName, lastName: this.lastName, email: this.email}, config.get('jwtSecret'));
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(6),
     
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
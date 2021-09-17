const mongoose = require('mongoose');
const validator = require('validator');

const loanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'User must have an email'],
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    address: {
        type: String,
        required: [true, 'User must have a address'],
        trim: true,
    },
    contact: {
        type: String,
        required: [true, 'User must have a contact number'],
        validate: [validator.isMobilePhone, 'Please provide a valid phone number'],
    },
    amount: {
        type: Number,
        unique: true,
        required: [true, 'Loan must have an amount'],
    },
    start_date: {
        type: Date,
        required: [true, 'Loan must have an starting date'],
    },
    expiry_date: {
        type: Date,
        default: true,
        required: [true, 'Loan must have an expiry date'],
    },
    emi: {
        type: Number,
    },
    type: {
        type: String,
        enum: ['Fixed', 'floating'],
    }
});


const User = mongoose.model('Loan', loanSchema);

module.exports = User;
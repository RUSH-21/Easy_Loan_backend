const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../models/userModel')
const Loan = require('../../models/loanModel')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    email: 'mike@gmail.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

const loanOne = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Arnab',
    email: 'arnabpoddar.ap@gmail.com',
    address: 'Kolkata',
    contact: 9845375839,
    amount: 1234,
    start_date: new Date(),
    expiry_date: new Date(),
    emi: 23,
    type:'Fixed',
}


const setupDB = async() => {
    jest.setTimeout(30000);
    await User.deleteMany();
    await Loan.deleteMany();
    await new User(userOne).save();
    await new Loan(loanOne).save();
}

module.exports = {
    userOneId,
    userOne,
    loanOne,
    setupDB,
}
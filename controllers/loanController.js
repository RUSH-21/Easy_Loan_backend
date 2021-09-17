const Loan = require('../models/loanModel')

const emiCalulator = ( amount, start_date, end_date) => {
    const rate = 10;
    end_date = new Date(end_date);
    start_date = new Date(start_date);
    const months = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth())
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest).toFixed(2);
    return total;
}

const createLoan =  async (req, res) => {
    const emi = emiCalulator(req.body.amount,req.body.start_date,req.body.expiry_date)
    const loan = new Loan({...req.body, emi});

    try{
        await loan.save();
        res.status(201).send(loan)
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    } 
}


const getLoan = async (req, res) => {
    
    try{
        const loans = await Loan.find({});
        res.status(200).send(loans)
    }catch(e){
        res.status(400).send(e);
    } 
}


module.exports = {
    createLoan,
    getLoan
}
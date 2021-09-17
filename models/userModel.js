const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'User must have an email'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
    },
    tokens: [{
        token: {
            type: String,
        }
    }],
});

//middleware hash the plain text password before saving
userSchema.pre('save', async function(next){

    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

userSchema.methods.toJSON = function() {      // used to remove private data from JSON response
    const userObject = this.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function() {                     
    const token = jwt.sign({_id: this._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })

    this.tokens = this.tokens.concat({ token });
    await this.save();

    return token;
}

userSchema.statics.findByCredentials = async(email, password) => {         // .statics is used for fucntions which is going to used by models
    const user = await User.findOne({email})
    
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error({"error": "Unable to login"})
    }

    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
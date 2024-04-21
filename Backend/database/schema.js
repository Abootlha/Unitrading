const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
// initilise table
const Users = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
    authenticated: Boolean,
    is_verified: Boolean
});


const ContactUsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    subject: String,
    message: String
});

const CheckoutSchema = new mongoose.Schema({
    Country: String,
    firstname: String,
    lastname: String,
    StreetAddress: String,
    TownOrCity: String,
    StateOrCountry: String,
    PostCodeOrZIP: Number,
    EmailAddress:  String,
    PhoneNumber: Number,
    plan: String,
    price: String,
    // Payment_Status: Boolean,
});

const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    Phone: Number,
    email: String,
    password: String,
    Payment_Status: Boolean,
});


RegisterSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

module.exports = RegisterModel;

// creating table instance
const UserInstance = mongoose.model('Users', Users);
const ContactUsModel = mongoose.model('ContactUs', ContactUsSchema);
const CheckoutSchemaModel = mongoose.model('Checkout', CheckoutSchema);
const RegisterSchemaModel = mongoose.model('register',RegisterSchema);

// export schema instance
module.exports={
    UserInstance,
    ContactUsModel,
    CheckoutSchemaModel,
    RegisterSchemaModel
}
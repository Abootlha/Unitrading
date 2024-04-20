const mongoose=require('mongoose')
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
    Payment_Status: Boolean,
})

// creating table instance
const UserInstance = mongoose.model('Users', Users);
const ContactUsModel = mongoose.model('ContactUs', ContactUsSchema);
const CheckoutSchemaModel = mongoose.model('Checkout', CheckoutSchema);

// export schema instance
module.exports={
    UserInstance,
    ContactUsModel,
    CheckoutSchemaModel
}
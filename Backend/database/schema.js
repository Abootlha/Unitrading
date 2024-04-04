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

// creating table instance
const UserInstance = mongoose.model('Users', Users);
const ContactUsModel = mongoose.model('ContactUs', ContactUsSchema);

// export schema instance
module.exports={
    UserInstance,
    ContactUsModel
}
const mongoose=require('mongoose')
// initilise table
const Users = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
    authenticated: Boolean,
    is_verified: Boolean
});

// creating table instance
const UserInstance = mongoose.model('Users', Users);

// export schema instance
module.exports={
    UserInstance
}
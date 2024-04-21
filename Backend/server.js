const schema =require('./database/schema.js');
const session = require('express-session');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const secretKey = "@Talha1234";
const jwt_secret="gvbdjknflmt637yreufjncjnegwu46ee8ehnc4uuiye8tfhijcen87wt48egbfuyvcg4e87fc";
const jwt = require('jsonwebtoken');

const app = express();

// middleware
app.use(express.json())

// cors
// const cors=require('cors')
app.use(cors());

app.use(session({
  secret: '@Talha123', // Change this to your actual secret key
  resave: false,
  saveUninitialized: false
}));


function requireAuth(req, res, next) {

  const token = req.headers.authorization;

  if (!token) {
    console.log('Token is missing, redirecting to login page');
    
    return res.redirect('/login');
  }


  try {
    const decoded = jwt.verify(token, jwt_secret); 
    console.log()
 
    next();
  } catch (error) {
    console.log('Token is invalid, redirecting to login page');
    // Token is invalid, redirect to login page
    return res.redirect('/login');
  }
}



app.use(cors());
async function connectDB(){
    try {
        await mongoose.connect('mongodb://unitTrading:UnitTrading123@ac-3anvuvs-shard-00-00.i4kxub1.mongodb.net:27017,ac-3anvuvs-shard-00-01.i4kxub1.mongodb.net:27017,ac-3anvuvs-shard-00-02.i4kxub1.mongodb.net:27017/?ssl=true&replicaSet=atlas-ljrxmz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {})
        console.log('Connected to the database.');
    }catch (e) {
        console.log('Error connecting to the database. and the Exception is '+e);
        throw e
     }
};



app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hello World!');
});


app.post('/checkout-page', async(req,res) =>{

  try {
  const { Country,firstname, lastname,StreetAddress, TownOrCity,StateOrCountry,PostCodeOrZIP, EmailAddress, PhoneNumber, plan, price }= req.body;
  const newCheckout = await schema.CheckoutSchemaModel({
    Country,
    firstname,
    lastname,
    StreetAddress, 
    TownOrCity,
    StateOrCountry,
    PostCodeOrZIP, 
    EmailAddress, 
    PhoneNumber , 
    plan, 
    price , 

  });
  await newCheckout.save();
  res.status(201).json({ message: 'your Checkout details are stored' });
} catch (error) {
  res.status(500).json({ error: 'Internal server error' });
}
});


app.post('/register', async(req,res) =>{

  try {
  const { firstName, lastName,country,Phone, email, password, Payment_Status }= req.body;

  const existingUser = await schema.RegisterSchemaModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

  const newRegister = await schema.RegisterSchemaModel({
    firstName,
    lastName,
    country,
    Phone,
    email,
    password,
    Payment_Status,

  });
  await newRegister.save();
  res.status(201).json({ message: 'your Registration details are stored' });
} catch (error) {
  res.status(500).json({ error: 'Internal server error' });
}
});


app.get('/home', (req, res) => {
  console.log(req.url)
  if(user.role=="admin"){
    // 
    req.send("this is admin role")
    req.end()
  }else{
    // 
    req.send("this is admin role")

  }
  // res.send('Hello World!');
});


app.get('/courses', requireAuth, (req, res) => {
  // This route requires authentication
  console.log("i am in courses route");
  res.send('Courses Page');
});




app.post('/login', async (req, res) => {
    const { email, password, Payment_Status } = req.body;

    try {
        const userRegister = await schema.RegisterSchemaModel.findOne({ email });
        

        if (!userRegister) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, userRegister.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        if (!userRegister.Payment_Status) {
            return res.status(403).json({ message: "Payment not completed" });
        }

        const token = jwt.sign({ userId: userRegister._id, email: userRegister._id }, jwt_secret, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


app.get('/logout',async (req, res)=>{
  // decode token, then find user and set user token to null ''
  // after decode you will get user id and email, fetch that user and set its token to ''

  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwt_secret); 
  

  const { userId, email } = decoded;

  const user = await schema.UserInstance.findById(userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  
  
  await user.save();
  res.send("logged out successfully");
})



app.post('/contact-us', async (req, res) => {
  try {
      const { firstname, lastname, email, subject, message } = req.body;
      const newContactMessage = await schema.ContactUsModel({
          firstname,
          lastname,
          email,
          subject,
          message
      });
      await newContactMessage.save();
      res.status(201).json({ message: 'Contact message created successfully' });
    
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// call connectDB
connectDB()
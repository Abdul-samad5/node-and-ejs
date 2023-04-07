var express = require('express');
var app = express();
const mongoose = require('mongoose');
const Tool = require('./models/tool');
const User = require('./models/user');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.json({extented: false}))


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Define routes for different pages
app.get('/login', (req, res) => {
    res.render('pages/login');
  });
  
  app.get('/register', (req, res) => {
    res.render('pages/register');
  });
  
  app.post('/register', async (req, res) => {
    const { firstName, lastName, address, postcode, sector, email, password } = req.body;
  
    try {
      // Check if user already exists
      // const user = await User.findOne({ email });
      // if (user) {
      //   res.render('pages/register', { error: 'User with that email already exists' });
      //   return;
      // }
  
      // Create new user
    //   const newUser = new User({ firstName:firstName, 
    //     lastName:lastName, address:address, postcode:postcode,
    //      sector:sector, email:email, password:password });
    // const mine =  await newUser.save();
   const newUser = await User.create({ firstName:firstName, 
      lastName:lastName, address:address, postcode:postcode,
       sector:sector, email:email, password:password})
      newUser.save((err,info)=>{
        if(err) {
          res.status(500).json({message:err.message})
        }
        res.status(201).json({message:info})
      });
      console.log(newUser)
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving user');
    }
  });
   
  app.get('/tools', (req, res) => {
    Tool.find({ available: true }, (err, tools) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching tools');
        } else {
          res.render('pages/tools', { tools });
        }
      });
    // res.render('pages/tools');
  });
  
  app.get('/admin', (req, res) => {
    res.render('pages/admin');
  });

  mongoose.connect('mongodb+srv://mine:africa@cluster0.8lsutr0.mongodb.net/booking',)
  .then(() => {
    
app.listen(8080);
console.log('Server is listening on port 8080');
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });
  
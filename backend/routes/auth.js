const express = require('express');
const User = require('../models/user'); // Import your User model here
const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'jaofji439nji9dahjfaojhguyggyug';
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userdoc = await User.create({
      username,
      email,
      password
    });
    console.log(userdoc);
    res.json(userdoc);
  } catch (e) {
    console.log(e);
    res.status(422).json({ error: "Failed to create user", details: e.message });
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const userDoc = await User.findOne({email});

  if(userDoc){
    // const pass = compareSync(password,userDoc.password);
    if(password === userDoc.password){
      
      jwt.sign({email:userDoc.email,
          id:userDoc._id,
          username: userDoc.username
        }, jwtSecret,{},(err,token) =>{
        if(err) 
          throw err;  
        console.log(token);
        res.cookie('token',token,{ sameSite: 'None', secure: true }).json(userDoc);
        //set the session but accesing email in post page through this method is not working properly
        req.session.userEmail = userDoc.email;
        console.log(req.session.userEmail); // Debugging: Log the userEmail to the console
      });
    }
    else{
      res.json('password is wrong');
    }
  }
  else{
    res.json('not found');
  }


})

router.get('/profile',(req,res) =>{
  const {token} = req.cookies;
  if(token){
    jwt.verify(token, jwtSecret,{},(err, user) =>{
      if(err){
        throw err;
      }
      // console.log(user)
      res.json(user);
    });
  }
  else{
    res.json(null);
  }
  // console.log('user info');
  // res.json({token});
})

router.post('/logout',(req,res)=>{
    res.cookie('token','').json(true);
})

module.exports = router;

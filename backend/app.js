const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const app = express();
const cookieParser = require('cookie-parser');

// const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/auth');
require('dotenv').config();
// const jwtSecret = 'jaofji439nji9dahjfaoj';
app.use(cookieParser());

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',//this line is link from the react
    // origin: '*',
    optionSuccessStatus:200,

}));

//  mongoose.connect(process.env.MONGO_URL);
// Update the MongoDB connection URL
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.get('/tes',(req,res) => {
    console.log("linked");
    // res.json("hello hii");
    
    res.send("hello");
});

app.use('/', authRoutes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });


const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const jwtSecret = 'jaofji439nji9dahjfaoj';
app.use(cookieParser());
app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',//this line is link from the react
    // origin: '*',
    optionSuccessStatus:200,

}));

const fileUpload = require('express-fileupload');
app.use(fileUpload());


app.use(
    session({
      secret: 'jaofji439nji9dahjfaoj', // Change this to a strong, random secret
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }, // Adjust this according to your needs
    })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
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

const blogRoutes = require('./routes/blogRoute');
app.use("/blog", blogRoutes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });


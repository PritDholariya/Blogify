const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/user');
const app = express();
// const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/auth');
require('dotenv').config();


app.use(express.json());
app.use(cors({
    credentials: true,
    // origin: 'http://localhost:5173',//this line is link from the react
    origin: '*',
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

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const connectDB = require('./config/db');

// connectDB();
// // const app = express();
// const app = express();
// app.use(express.json());
// // connectDB();
// // app.get('/', (req, res) => res.send('Hello world!'));


// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
// }

// app.use(cors(corsOptions));
// // app.get('/', (req, res) => res.send('Hello world!'));

// app.use("/auth", authRoutes);

// app.listen(8080, (err) => {
//     console.log(err);
// })

//previous try
// const express = require('express');
// const connectDB = require('./config/db');

// const app = express();

// // Connect Database
// connectDB();

// app.get('/', (req, res) => res.send('Hello world!'));

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));


// app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const connectDB = require('./config/db');

// const app = express();
// connectDB();
// // Connect to MongoDB
// mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

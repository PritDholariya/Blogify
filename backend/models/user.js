// models/User.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // profilePhoto: { type: Buffer }, // You can store the URL to the profile photo
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;
//if we want to encrypt password then
// userSchema.pre('save', async function (next) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });


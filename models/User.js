const mongoose = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please Enter an Email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please Enter a valid Email']
  },
  password: {
    type: String,
    required: [true, 'Please Enter a valid PassWord'],
    minlength: [4, 'Minimum Password length is 4 characters'],
  },
})

// fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
  console.log('new user was created & saved', doc);
})
const User = mongoose.model('user', userSchema);

module.exports = User;
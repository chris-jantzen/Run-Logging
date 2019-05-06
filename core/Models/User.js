const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Must enter a first name'
  },
  middleInitial: {
    type: String
  },
  lastName: {
    type: String,
    required: 'Must enter a last name'
  },
  email: {
    type: String,
    required: 'Must enter an email'
  },
  age: {
    type: Number,
    required: 'Must enter an age'
  },
  gender: {
    type: String,
    required: 'Add your gender'
  },
  weight: {
    type: Number
  },
  height: {
    type: String,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};
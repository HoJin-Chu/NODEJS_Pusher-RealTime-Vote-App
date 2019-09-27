const mongoose = require('mongoose')

// Map global promises
mongoose.Promise = global.Promise
// Mongoose Connect
mongoose
  .connect('mongodb+srv://test_username:test_password@cluster0-lsdlf.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
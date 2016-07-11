var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  concertIDs: Array
})

// we are declaring user as the new model name
// and assigning the schema to this model in the second argument
module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

// creare lo schema per ciascun utente
const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
})

module.exports = mongoose.model('User', userSchema);

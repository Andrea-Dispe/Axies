const mongoose = require('mongoose');

// creare lo schema per ciascun utente
const skillSchema = mongoose.Schema({
  title: {type: String, required: true},
  energy: {type: Number, required: true},
  attack: {type: Number, required: true},
  defense: {type: Number, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
  part: {type: String, required: true},
})

module.exports = mongoose.model('Skills', skillSchema);


//MONGODB_URI=mongodb+srv://andrea:projektor444@cluster0.u9qly.mongodb.net/Axies?retryWrites=true&w=majority
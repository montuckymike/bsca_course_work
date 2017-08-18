const mongoose = require('mongoose')

const PerformerSchema = new mongoose.Schema({
  name: String,
  band: String,
  rank: Number
})

module.exports = mongoose.model('Performer', PerformerSchema)

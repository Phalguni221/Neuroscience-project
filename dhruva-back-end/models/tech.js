const mongoose = require('mongoose')

let techSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    author: { type: String, default: 'Anonymous' },
    date: { type: Number, required: true },
    link: { type: String, default: '' }
})

techSchema.methods.showEstablished = function() {}
  
module.exports = mongoose.model('Tech', techSchema)
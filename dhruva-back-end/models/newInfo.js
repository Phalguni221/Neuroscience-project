
const mongoose = require('mongoose')

let NewInfoSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    author: { type: String, default: 'Anonymous' },
    date: { type: Number, required: true },
    link: { type: String, default: '' }
})

NewInfoSchema.methods.showEstablished = function() {}
  
module.exports = mongoose.model('NewInfo', NewInfoSchema)
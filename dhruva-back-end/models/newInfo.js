
const mongoose = require('mongoose')

const newinfoSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    author: { type: String, default: 'Anonymous' },
    date: { type: String, required: true },
    link: { type: String, default: '' }
})

newinfoSchema.methods.showEstablished = function() {
return `${this.title} by ${this.author}, published ${this.date}. Link to article: ${this.link}.`
}
  
module.exports = mongoose.model('newinfo', newinfoSchema, 'newinfo')
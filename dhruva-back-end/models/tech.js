const mongoose = require('mongoose')

let techSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    author: { type: String, default: 'Anonymous' },
    date: { type: String, required: true },
    link: { type: String, default: '' }
})

techSchema.methods.showEstablished = function() {}
  
// module.exports = mongoose.model('Tech', techSchema)

// const mongoose = require('mongoose')

// const techSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   pic: { type: String, default: 'http://placekitten.com/350/350'},
//   cuisines: { type: String, required: true },
//   city: { type: String, default: 'Anytown' },
//   state: { type: String, default: 'USA' },
//   founded: {
//     type: Number,
//     min: [1673, 'Surely not that old?!'],
//     max: [new Date().getFullYear(), 'This is the future!']
//   },
//   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
// })

// techSchema.methods.showEstablished = function() {
//   return `${this.name} has been serving ${this.city},${this.state} since ${this.founded}.`
// }

// module.exports = mongoose.model('Tech', techSchema)
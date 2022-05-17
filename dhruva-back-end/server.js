const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



app.use('/articles', require('./controllers/articles'))

app.get('/NewInfo', (req, res) => {
  res.render('NewInfo')
})

// app.post('/Technnology', (req,res) => {
//     res.render('Technology')
//   })
  

//Listen for Connections
app.listen(process.env.PORT)
console.log("Backend server is running!")
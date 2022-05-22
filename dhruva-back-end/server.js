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

app.get('/', (req, res) => {
  require('./controllers/articles')
})

app.post('/', (req,res) => {
  res.render('NewInfo')
})


app.get('/tech', (req, res) => {
  require('./controllers/articles')
})

app.post('/tech', (req,res) => {
  res.render('Tech')
})

app.get('/login', (req, res) => {
  res.render('login')
})
// app.post('/Technnology', (req,res) => {
//     res.render('Technology')
//   })

mongoose
  .connect("mongodb://localhost:27017/neurostyle") //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

//Listen for Connections
app.listen(process.env.PORT || 3400, () => {
  console.log("Backend server is running!");
});
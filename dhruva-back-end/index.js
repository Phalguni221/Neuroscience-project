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

//Controllers and Routes
app.use('/places', require('./controllers/places'))

app.post('/places', (req,res) => {
  res.render('places')
})

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.get('/places/edit', (req, res) => {
  res.render('Editpage')
})

app.get('/places/delete', (req, res) => {
  res.render('Deletepage')
})

app.get('/places/comment', (req, res) => {
  res.render('Commentpage')
})

//Listen for Connections
app.listen(process.env.PORT)
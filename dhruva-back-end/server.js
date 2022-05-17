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



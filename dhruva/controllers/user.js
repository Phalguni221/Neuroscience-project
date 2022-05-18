const router = require('express').Router()


router.get('/User', (req, res) => {
  res.render('UserLogin/User.js')
})


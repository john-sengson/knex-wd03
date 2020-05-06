const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('home', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const { name, email, phone,} = req.body
  db.addUser({ name, email, phone })
    .then(() => res.redirect('/'))
})

module.exports = router

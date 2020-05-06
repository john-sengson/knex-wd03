const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUsers: getUsers,
  addUser: addUser,
}

function getUsers (db = connection) {
  return db('users').select()
}

function addUser (data, db = connection) {
  return db('users').insert({
    name: data.name,
    email: data.email,
    phone: data.phone
  })
}
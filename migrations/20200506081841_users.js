
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.number('phone')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}

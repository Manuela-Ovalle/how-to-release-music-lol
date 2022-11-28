exports.up = function (knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('category')
    table.string('timeline')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}

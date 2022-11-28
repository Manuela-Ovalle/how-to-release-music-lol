const connection = require('./connection')

function getTasks(db = connection) {
  return db('tasks').select()
}

function addTasks(newTask, db = connection) {
  return db('tasks').insert()
}

module.exports = {
  getTasks,
  addTasks,
}

const connection = require('./connection')

function getTasks(db = connection) {
  return db('tasks').select()
}

function addTasks(newTask, db = connection) {
  return db('tasks').insert()
}

function updateTasks(updatedTask, db = connection) {
  return db('tasks').where('id', updatedTask.id).update(updatedTask)
}

function deleteTasks(id, db = connection) {
  return db('tasks').where('id', id).delete()
}

module.exports = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks,
}

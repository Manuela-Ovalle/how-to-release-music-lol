const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
    .then((results) => {
      res.json({ tasks: results.map((task) => task.name) })
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Something went wrong in the getTasks route' })
    })
})

router.post('/', (req, res) => {
  db.addTasks(req.body.task)
    .then(() => {
      return db.getTasks()
    })
    .then((updatedTasks) => {
      res.json(updatedTasks)
    })
    .catch((err) => console.error(err.message))
})

router.put('/', (req, res) => {
  db.updateTasks(req.body.task)
    .then((updateTask) => {
      res.json(updateTask)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/', (req, res) =>{
  db.deleteTasks(req.body.task)
    .then((delTask) => {

    })
})

module.exports = router

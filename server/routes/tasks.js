const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
    .then((results) => {
      res.json({ fruits: results.map((task) => task.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
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

module.exports = router

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
      res.status(500).json({ message: 'Something went wrong in the getTasks route' })
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

router.patch('/', (req, res)=>{
  db.updateTasks
})

module.exports = router

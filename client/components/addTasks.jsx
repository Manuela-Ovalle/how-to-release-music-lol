import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../actions/index'

function AddTasks(props) {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState({
    name: '',
    completed: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNewTask((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    dispatch(createTask(newTask))
    setNewTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-task"
          placeholder="add new tasks here"
          onChange={handleChange}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTasks

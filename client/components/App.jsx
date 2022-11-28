import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTasks } from '../../client/actions/index'

function App() {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <>
      <div className="app">
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

import { getTasksApi, addTasksApi } from '../../client/apis/apiClient'

export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'

export function setTasks(task) {
  return {
    type: SET_TASKS,
    payload: task,
  }
}

export function showTasks() {
  return (dispatch) => {
    return getTasksApi().then((tasks) => {
      dispatch(setTasks(tasks))
    })
  }
}

export function fetchTasks() {
  return (dispatch) => {
    return getTasksApi()
      .then((result) => {
        dispatch(showTasks(result))
        return null
      })
      .catch((err) => console.error(err.message))
  }
}

export function addTasks(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  }
}

export function createTodos(newTask) {
  return (dispatch) => {
    return addTasksApi(newTask)
      .then((updatedTasks) => {
        dispatch(showTasks(updatedTasks))
        return null
      })
      .catch((err) => console.error(err.message))
  }
}

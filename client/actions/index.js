import { getTasksApi } from '../../client/apis/apiClient'

export const SET_TASKS = 'SET_TASKS'

export function setTasks(task) {
  return {
    type: SET_TASKS,
    payload: task,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getTasksApi().then((tasks) => {
      dispatch(setTasks(tasks))
    })
  }
}

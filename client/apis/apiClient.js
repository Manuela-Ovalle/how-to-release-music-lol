import request from 'superagent'

const rootUrl = '/api/v1'

export function getTasksApi() {
  return request.get(rootUrl + '/tasks').then((res) => {
    return res.body
  })
}

export function addTasksApi(newTask) {
  return request
    .post('/api/v1/tasks')
    .send({ newTask })
    .then((res) => {
      return res.body
    })
}

import { SET_TASKS } from '../../client/actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_TASKS:
      return payload
    default:
      return state
  }
}

export default reducer

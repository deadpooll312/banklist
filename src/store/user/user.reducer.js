import { USER_FULFILLED, USER_PENDING, USER_REJECTED, USER_UPDATE, USER_CLEAR } from './user.actions'

const inintialState = {
  loading: false,
  data: {},
  error: null
}

export default function user (state = inintialState, action) {
  switch (action.type) {
    case USER_FULFILLED:
      return {
        ...state,
        ...{
          data: action.payload,
          loading: false
        }
      }
    case USER_PENDING:
      return { ...state, ...{ loading: true } }
    case USER_UPDATE:
      return { ...state, ...{ data: Object.assign(state.data, action.payload) } }
    case USER_REJECTED:
      return {
        ...state,
        ...{
          loading: false,
          error: action.payload
        }
      }
    case USER_CLEAR:
      return {
        ...state,
        ...{
          loading: false,
          error: null,
          data: {}
        }
      }
    default:
      return state
  }
}

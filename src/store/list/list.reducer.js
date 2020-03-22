import { LIST_FULFILLED, LIST_PENDING, LIST_REJECTED, LIST_REMOVE_ITEM } from './list.action'
import { Storage } from '../../services'

const inintialState = {
  loading: false,
  error: null,
  data: []
}

export default function list (state = inintialState, action) {
  switch (action.type) {
    case LIST_FULFILLED:
      return {
        ...state,
        ...{
          data: action.payload,
          loading: false
        }
      }
    case LIST_PENDING:
      return { ...state, ...{ loading: true } }
    case LIST_REJECTED:
      return {
        ...state,
        ...{
          loading: false,
          error: action.payload
        }
      }
    case LIST_REMOVE_ITEM:
      const data = [...[], ...state.data]
      const index = data.findIndex(item => item.id === action.payload)
      data.splice(index, 1)

      Storage.setItems({ data })

      return { ...state, ...{ data } }
    default:
      return state
  }
}

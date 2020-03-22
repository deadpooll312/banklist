import { TRANSACTION_FULFILLED, TRANSACTION_PENDING, TRANSACTION_REJECTED } from './transaction.action'
import { Storage } from '../../services'

const inintialState = {
  loading: false,
  data: {},
  error: null
}

export default function transaction (state = inintialState, action) {
  switch (action.type) {
    case TRANSACTION_FULFILLED:
      const { data } = JSON.parse(Storage.response())
      data.push(action.payload)
      Storage.setItems({ data })

      return {
        ...state,
        ...{
          data: action.payload,
          loading: false,
          error: null
        }
      }
    case TRANSACTION_PENDING:
      return {
        ...state,
        ...{ loading: true }
      }
    case TRANSACTION_REJECTED:
      return {
        ...state,
        ...{
          data: {},
          loading: false,
          error: action.payload
        }
      }
    default:
      return {
        ...state,
        ...{
          data: {},
          error: null
        }
      }
  }
}

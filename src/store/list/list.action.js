import { response } from '../../data'
import { Storage } from '../../services'

export const LIST = 'LIST'
export const LIST_PENDING = 'LIST_PENDING'
export const LIST_REJECTED = 'LIST_REJECTED'
export const LIST_FULFILLED = 'LIST_FULFILLED'
export const LIST_REMOVE_ITEM = 'LIST_REMOVE_ITEM'

const actionRemoveItem = payload => ({
  type: LIST_REMOVE_ITEM,
  payload
})

export function initList () {
  return dispatch => {
    dispatch({
      type: LIST,
      payload: new Promise((res, rej) => {
        if (Storage.response()) {
          const data = JSON.parse(Storage.response())
          setTimeout(() => res(data), 500)
        } else {
          Storage.setItems(response)
          setTimeout(() => res(response), 500)
        }

        // setTimeout(() => rej(new Error('Some 500')), 1500)
      }).then(res => res.data)
    }).catch(() => new Error('500 error'))
  }
}

export function removeItem (id) {
  return dispatch => dispatch(actionRemoveItem(id))
}

import { ID_TOKEN } from '../../constants'

export const USER = 'USER'
export const USER_FULFILLED = 'USER_FULFILLED'
export const USER_REJECTED = 'USER_REJECTED'
export const USER_PENDING = 'USER_PENDING'
export const USER_UPDATE = 'USER_UPDATE'
export const USER_CLEAR = 'USER_CLEAR'

const actionClearUser = () => ({ type: USER_CLEAR })

export function loginUser (data) {
  const { name, password } = data
  const admin = 'admin'
  const isValid = (name === admin && password === admin)
  const payload = new Promise((res, reject) => {
    isValid ? res({ id_token: ID_TOKEN }) : reject(new Error('Oops not valid name or password'))
  })

  return dispatch => {
    dispatch({
      type: USER,
      payload
    }).catch(() => new Error('Some error'))
  }
}

export function updateUser () {
  const payload = new Promise(res => res({ name: 'Smitt' }))

  return dispatch => {
    dispatch({
      type: USER,
      payload
    }).catch(() => new Error('Some error'))
  }
}

export function clearUser () {
  return dispatch => {
    localStorage.clear()
    dispatch(actionClearUser())
  }
}

export const TRANSACTION = 'TRANSACTION'
export const TRANSACTION_FULFILLED = 'TRANSACTION_FULFILLED'
export const TRANSACTION_REJECTED = 'TRANSACTION_REJECTED'
export const TRANSACTION_PENDING = 'TRANSACTION_PENDING'

export function createTransaction (data) {
  return dispatch => {
    dispatch({
      type: TRANSACTION,
      payload: new Promise(res => setTimeout(() => res(data), 1200))
    }).catch(() => new Error('Some error'))
  }
}

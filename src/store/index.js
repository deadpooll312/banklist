import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'

// local files
import user from './user/user.reducer'
import list from './list/list.reducer'
import transaction from './transaction/transaction.reducer'

const rootReducer = combineReducers({
  user,
  list,
  transaction
})
const middleware = applyMiddleware(thunkMiddleware, promise)

export default createStore(rootReducer, composeWithDevTools(middleware))

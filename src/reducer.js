import { combineReducers } from 'redux'
import counter from './modules/counter/ducks'


const rootReducer = combineReducers({
  counter,
})

export default rootReducer

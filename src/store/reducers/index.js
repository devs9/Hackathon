import { combineReducers } from 'redux'
import category from './setCategoryReducer'
import joke from './setJokeReducer'

export default combineReducers({
  category,
  joke,
})

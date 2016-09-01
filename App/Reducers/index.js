import { combineReducers } from 'redux'
import WeatherReducer from './WeatherReducer'
import AuthentificationReducer from './AuthentificationReducer'
import MessagesReducer from './MessagesReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  weather: WeatherReducer,
  authentification: AuthentificationReducer,
  messages: MessagesReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = [ 'messages' ]

import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({})

const authenticate = (state, action) => {
  return action.infos
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.AUTHENTICATE]: authenticate
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

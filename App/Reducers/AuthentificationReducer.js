import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  code: null,
  state: null
})

const authenticate = (state, action) =>
  state.merge({
    code: action.code,
    state: action.state
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.AUTHENTICATE]: authenticate
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

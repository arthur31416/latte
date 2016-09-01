import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable([])

const add = (state, { message }) =>
  state.concat({
    label: message.label,
    channelId: message.channelId,
    createdAt: Math.round(Date.now() / 1000),
    sendAt: message.sendAt,
    tags: message.tags
  })

const ACTION_HANDLERS = {
  [Types.ADD_MESSAGE]: add
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

import { UserActionTypes } from './user.states'

export const setCurrentUser = user => ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload: user
})
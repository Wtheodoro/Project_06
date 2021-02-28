import { Reducer } from 'redux'
import { SignEnumTypes, AccessToken } from './types'

const INITIAL_STATE: any = {
    accessToken: ''
}

const reducerToken: Reducer<AccessToken> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignEnumTypes.POST_LOGIN_SUCCESS:
            return {
                ...state
            }
        case SignEnumTypes.POST_LOGIN_FAILURE:
            return {
                ...state
            }
        case SignEnumTypes.POST_LOGIN_REQUEST:
            return {
                ...state,
                accessToken: action.payload
            }
        case SignEnumTypes.POST_SIGNUP_SUCCESS:
            return {
                ...state
            }
        case SignEnumTypes.POST_SIGNUP_FAILURE:
            return {
                ...state
            }
        case SignEnumTypes.POST_SIGNUP_REQUEST:
            return {
                ...state,
                accessToken: action.payload
            }
        default:
            return state
    }
}

export default reducerToken
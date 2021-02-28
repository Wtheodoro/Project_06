import { action } from 'typesafe-actions'
import { AccessToken, SignEnumTypes, SignIn } from './types'

export const loadTokenRequest = (token: SignIn) => action(SignEnumTypes.POST_LOGIN_REQUEST, token)

export const loadTokenSuccess = (payload: AccessToken)  => action(SignEnumTypes.POST_LOGIN_SUCCESS, payload)

export const loadTokenFailure = () => action(SignEnumTypes.POST_LOGIN_FAILURE)




export const loadTokenRequestUp = (token: SignIn) => action(SignEnumTypes.POST_SIGNUP_REQUEST, token)

export const loadTokenSuccessUp = (payload: AccessToken)  => action(SignEnumTypes.POST_SIGNUP_SUCCESS, payload)

export const loadTokenFailureUp = () => action(SignEnumTypes.POST_SIGNUP_FAILURE)
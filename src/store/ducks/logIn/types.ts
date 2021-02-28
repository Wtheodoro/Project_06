export enum SignEnumTypes {
    POST_LOGIN_REQUEST = '@GET_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS = '@GET_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE = '@GET_LOGIN_FAILURE',

    POST_SIGNUP_REQUEST = '@GET_SIGNUP_REQUEST',
    POST_SIGNUP_SUCCESS = '@GET_SIGNUP_SUCCESS',
    POST_SIGNUP_FAILURE = '@GET_SIGNUP_FAILURE'
}

export interface SignIn {
    email: string | undefined,
    password: string | undefined
}

export interface SignInPayload {
    payload: SignIn
}

export interface SignUp {
    name: string
    email: string
    password: string
}

export interface AccessToken {
    data: Data
}

export interface Data {
    accessToken: string
}
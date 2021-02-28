import { put, call } from 'redux-saga/effects'
import { loadTokenFailure, loadTokenFailureUp, loadTokenSuccess, loadTokenSuccessUp }  from './actions'
import { AccessToken } from './types'
import SignService from '../../../services/sign-service'

export function* postSignIn(input: any) {
    try {
        const response: AccessToken = yield call(SignService.postSignIn, input.payload )
        // yield put(loadTokenSuccess(response))
        yield localStorage.setItem('token', response.data.accessToken)
        console.log(response)
    } catch (error) {
        console.log(error)
        yield put(loadTokenFailure())
    }
}

export function* postSignUp(input: any) {
    try {
        const response: AccessToken = yield call(SignService.postSignUp, input.payload)
        // yield put(loadTokenSuccessUp(response))
    } catch (error) {
        console.log(error)
        yield put(loadTokenFailureUp())
    }
}
import { put, call } from 'redux-saga/effects'
import { loadCoinsFailure, loadCoinsRequest, loadCoinsSuccess, loadEspecificCurrcyFailure, loadEspecificCurrcySuccess } from './actions'
import CoinsService from '../../../services/coins-service'
import { AxiosResponse } from 'axios'

export function* getCoins() {
    try {
        const response: AxiosResponse<any> = yield call(CoinsService.getCoins)
        yield put(loadCoinsSuccess(Object.values(response.data)))
    } catch (error) {
        console.log(error)
        yield put(loadCoinsFailure())
    }
}

export function* getEspecificCurrency (param: any) {
    try {
        const response: AxiosResponse<any> = yield call(CoinsService.getSpecificCurrenc, param.payload)
        yield put(loadEspecificCurrcySuccess(response))
    } catch (error) {
        console.log(error)
        yield put(loadEspecificCurrcyFailure())
    }
}
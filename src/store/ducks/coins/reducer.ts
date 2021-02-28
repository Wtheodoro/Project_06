import { Reducer } from 'redux'
import { CoinsEnumType, CoinState } from './types'

const INITIAL_STATE: CoinState = {
    coins: []
}

const INITIAL_STATE_ESPECIFIC_CURRENCY: any = {
    currency: []
}

export const reducerCoin: Reducer<CoinState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CoinsEnumType.GET_COIN_SUCCESS:
            return {
                ...state,
                coins: action.payload
            }
        case CoinsEnumType.GET_COIN_FAILURE:
            return {
                ...state
            }
        case CoinsEnumType.GET_COIN_REQUEST:
            return {
                ...state
            }
        default:
            return state
    }
}


export const reducerEspecificCurrency: Reducer<any> = (state = INITIAL_STATE_ESPECIFIC_CURRENCY, action) => {
    switch(action.type) {
        case CoinsEnumType.GET_ESPECIFIC_CURRENCY_SUCCESS:
            return {
                ...state,
                currency: action.payload
            }
        case CoinsEnumType.GET_ESPECIFIC_CURRENCY_FAILURE:
            return {
                ...state
            }
        case CoinsEnumType.GET_ESPECIFIC_CURRENCY_REQUEST:
            return {
                ...state
            }
        default:
            return state
    }
}
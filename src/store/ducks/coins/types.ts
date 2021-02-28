export enum CoinsEnumType {
    GET_COIN_REQUEST = '@GET_COIN_REQUEST',
    GET_COIN_SUCCESS = '@GET_COIN_SUCCESS',
    GET_COIN_FAILURE = '@GET_COIN_FAILURE',

    GET_ESPECIFIC_CURRENCY_REQUEST = '@GET_ESPECIFIC_CURRENCY_REQUEST',
    GET_ESPECIFIC_CURRENCY_SUCCESS = '@GET_ESPECIFIC_CURRENCY_SUCCESS',
    GET_ESPECIFIC_CURRENCY_FAILURE = '@GET_ESPECIFIC_CURRENCY_FAILURE'
}

export interface CoinType {
    currency_code: string
    name: string
    symbol: string
    country_code: string
    country_name: string
}

export interface CoinState {
    coins: CoinType[]
}

export interface CoinReducerState {
    reducerCoin: CoinState
}
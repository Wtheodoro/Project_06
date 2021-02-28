import { action } from 'typesafe-actions'
import { CoinsEnumType } from './types'

export const loadCoinsRequest = () => action(CoinsEnumType.GET_COIN_REQUEST)

export const loadCoinsSuccess = (payload: any) => action(CoinsEnumType.GET_COIN_SUCCESS, payload)

export const loadCoinsFailure = () => action(CoinsEnumType.GET_COIN_FAILURE)


export const loadSpecificCurrencyRequest = (currency: string) => action(CoinsEnumType.GET_ESPECIFIC_CURRENCY_REQUEST, currency)

export const loadEspecificCurrcySuccess = (payload: any) => action(CoinsEnumType.GET_ESPECIFIC_CURRENCY_SUCCESS, payload)

export const loadEspecificCurrcyFailure = () => action(CoinsEnumType.GET_ESPECIFIC_CURRENCY_FAILURE)
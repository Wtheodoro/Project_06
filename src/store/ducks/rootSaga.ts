import { all, takeLatest } from "redux-saga/effects";
import { postSignIn, postSignUp } from "./logIn/saga";
import { SignEnumTypes } from "./logIn/types";
import { CoinsEnumType } from "./coins/types";
import { getCoins, getEspecificCurrency } from "./coins/saga";

export default function* rootSaga(): any{
    return yield all([
        takeLatest(SignEnumTypes.POST_LOGIN_REQUEST, postSignIn),
        takeLatest(SignEnumTypes.POST_SIGNUP_REQUEST, postSignUp),
        takeLatest(CoinsEnumType.GET_COIN_REQUEST, getCoins),
        takeLatest(CoinsEnumType.GET_ESPECIFIC_CURRENCY_REQUEST, getEspecificCurrency)
    ])
}
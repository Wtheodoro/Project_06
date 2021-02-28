import { combineReducers } from 'redux'
import reducerToken from './logIn/reducer'
import { reducerCoin, reducerEspecificCurrency } from './coins/reducer'
import reducerBudget from './budget/reducer'

const createRootReducer = () => combineReducers({
    reducerToken,
    reducerCoin,
    reducerEspecificCurrency,
    reducerBudget
})

export default createRootReducer
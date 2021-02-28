import { BudgetEnumTypes, BudgetState } from './types'

const INITIAL_BUDGET_STATE: BudgetState = {
    inc: [],
    exp: []
}

function reducerBudget(state = INITIAL_BUDGET_STATE, action: any) {
    switch(action.type) {
        case BudgetEnumTypes.SET_INC_BUDGET:
            return {
                ...state,
                inc: [...state.inc ,action.payload]
            }
        case BudgetEnumTypes.DELETE_INC_BUDGET:
            const indexOfItem = state.inc.findIndex((element: any) => element.description === action.payload.description)
            state.inc.splice(indexOfItem, 1)
            return {
                ...state,
            }
        case BudgetEnumTypes.SET_EXP_BUDGET:
            return {
                ...state,
                exp: [...state.exp ,action.payload]
            }
        case BudgetEnumTypes.DELETE_EXP_BUDGET:
            const indexOfItemExp = state.exp.findIndex((element: any) => element.description === action.payload.description)
            state.exp.splice(indexOfItemExp, 1)
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducerBudget
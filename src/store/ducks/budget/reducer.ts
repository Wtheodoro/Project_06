import { BudgetEnumTypes, BudgetState } from './types'

const INITIAL_BUDGET_STATE: BudgetState = {
    inc: 0,
    exp: 0
}

function reducerBudget(state = INITIAL_BUDGET_STATE, action: any) {
    switch(action.type) {
        case BudgetEnumTypes.SET_INC_BUDGET:
            return {
                ...state,
                inc: state.inc + action.payload
            }
        case BudgetEnumTypes.DELETE_INC_BUDGET:
            return {
                ...state,
                inc: state.inc - action.payload
            }
        case BudgetEnumTypes.SET_EXP_BUDGET:
            return {
                ...state,
                exp: state.exp + action.payload
            }
        case BudgetEnumTypes.DELETE_EXP_BUDGET:
            return {
                ...state,
                exp: state.exp - action.payload
            }
        default:
            return state
    }
}

export default reducerBudget
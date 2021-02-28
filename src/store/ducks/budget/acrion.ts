import { action } from 'typesafe-actions'
import { BudgetEnumTypes, Budget } from './types'

export const setInc = (payload: number) => action(BudgetEnumTypes.SET_INC_BUDGET, payload)
export const deleteInc = (payload: Budget) => action(BudgetEnumTypes.DELETE_INC_BUDGET, payload)

export const setExp = (payload: number) => action(BudgetEnumTypes.SET_EXP_BUDGET, payload)
export const deleteExp = (payload: Budget) => action(BudgetEnumTypes.DELETE_EXP_BUDGET, payload)
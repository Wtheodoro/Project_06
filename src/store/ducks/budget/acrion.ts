import { action } from 'typesafe-actions'
import { BudgetEnumTypes, BudgetExp, BudgetInc } from './types'

export const setInc = (payload: BudgetInc) => action(BudgetEnumTypes.SET_INC_BUDGET, payload)

export const setExp = (payload: BudgetExp) => action(BudgetEnumTypes.SET_EXP_BUDGET, payload)

export const deleteInc = (payload: BudgetInc) => action(BudgetEnumTypes.DELETE_INC_BUDGET, payload)

export const deleteExp = (payload: BudgetInc) => action(BudgetEnumTypes.DELETE_EXP_BUDGET, payload)
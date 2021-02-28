export enum BudgetEnumTypes {
    SET_INC_BUDGET = '@SET_INC_BUDGET',
    DELETE_INC_BUDGET = '@DELETE_INC_BUDGET',

    SET_EXP_BUDGET = '@SET_EXP_BUDGET',
    DELETE_EXP_BUDGET = '@DELETE_EXP_BUDGET'
}

export interface BudgetState {
    inc: BudgetInc[]
    exp: BudgetExp[]
}

export interface BudgetInc {
    description: string
    income: number
}

export interface BudgetExp {
    description: string
    expenses: number
}

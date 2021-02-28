import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BudgetState } from '../../../store/ducks/budget/types';

import { Container } from './styles';

const BudgetDisplay = (props: any) => {
  const [bills, setBills] = useState<number>(0)

  const budgetState = useSelector((state: any) => state.reducerBudget)

  useEffect (() => {
    const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue
    if (props.type === 'income' && budgetState.inc) {
      let sumInc: any[] = []
      budgetState.inc.map((i: any) => {
        sumInc.push(i.income)
        setBills(sumInc.reduce(reducer, 0))
      })

    } else if (props.type === 'expenses' && budgetState.exp) {
      let sumExp: any[] = []
        budgetState.exp.map((i: any) => {
        sumExp.push(i.expenses)
        setBills(sumExp.reduce(reducer, 0))
      })
    }
  }, [budgetState])

  return (
    <Container>
      <div className="text">{props.type}</div>
      <div className="right">
        {
          bills 
          ?
          <div className="value">{props.charge} {bills}</div>
          :
          <div className="value">{props.charge} 0</div>
        }
        {/* <div className="percentage">20%</div> */}
      </div>
    </Container>
  );
};

export default BudgetDisplay;

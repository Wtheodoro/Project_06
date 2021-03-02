import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BudgetState } from '../../../store/ducks/budget/types';
import BudgetDisplay from '../BudgetDisplay';
import getCurrentMonth from '../../../utils/newDate'

import { Container } from './styles';

const BudgetControl = () => {

  const [total, setTotal] = useState<number>()
  const {exp, inc} = useSelector((state: any) => state.reducerBudget)
  const month = getCurrentMonth()


  useEffect(() => {
    setTotal(sum())
  }, [exp, inc])

  const sum = () => {
    let incSum = 0, expSum = 0
    for(let index in inc) {
      incSum += inc[index].income
    }
    for(let index in exp) {
      expSum += exp[index].expenses
    }
    return incSum - expSum
  }

  return (
    <Container>
      <div className="title">
        Available Budget in <span className="month">{month}</span>
      </div>
      <div className="value">
        {total}
      </div>
      <BudgetDisplay type={'income'} charge={'+'} backgroundColor={'#28B9B5'}/>
      <BudgetDisplay type={'expenses'} charge={'-'} backgroundColor={'#FF5049'}/>
    </Container>
  );
};

export default BudgetControl;

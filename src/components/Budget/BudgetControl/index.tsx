import React from 'react';
import { useSelector } from 'react-redux';
import { BudgetState } from '../../../store/ducks/budget/types';
import BudgetDisplay from '../BudgetDisplay';

import { Container } from './styles';

const BudgetControl = () => {
  return (
    <Container>
      <h1>Budget Ctrl</h1>
      <div className="title">
        Available Budget in <span className="month">%Month%</span>
      </div>
      <div className="value">
        +2.323,55
      </div>
      <BudgetDisplay type={'income'} charge={'+'}/>
      <BudgetDisplay type={'expenses'} charge={'-'}/>
    </Container>
  );
};

export default BudgetControl;

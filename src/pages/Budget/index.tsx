import React from 'react';
import BudgetControl from '../../components/Budget/BudgetControl';
import BudgetDetail from '../../components/Budget/BudgetDetail';
import BudgetInsert from '../../components/Budget/BudgetInsert';

import { Container } from './styles';

const Budget = () => {
  return (
    <Container>
      <BudgetControl />
      <BudgetInsert />
      <div className="detail">
      <BudgetDetail type={'income'} charge={'+'}/>
      <BudgetDetail type={'expenses'} charge={'-'}/>
      </div>
    </Container>
  );
};

export default Budget;

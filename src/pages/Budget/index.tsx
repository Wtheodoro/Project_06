import React from 'react';
import BudgetControl from '../../components/Budget/BudgetControl';
import BudgetDetail from '../../components/Budget/BudgetDetail';
import BudgetInsert from '../../components/Budget/BudgetInsert';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Budget = () => {
  return (
    <Container>
      <NavBar />
      <div className="content">
        <BudgetControl />
        <BudgetInsert />
        <div className="detail">
        <BudgetDetail type={'income'} charge={'+'}/>
        <BudgetDetail type={'expenses'} charge={'-'}/>
        </div>
      </div>
      
    </Container>
  );
};

export default Budget;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BudgetState } from '../../../store/ducks/budget/types';

import { Container } from './styles';

const BudgetDisplay = (props: any) => {

  const [bills, setBills] = useState<number>()
  const [reRender, setReRender] = useState<boolean>(false)

  const { exp, inc } = useSelector((state: any) => state.reducerBudget)

  useEffect (() => {
    if (props.type === 'income') {
      setBills(inc)
    } else if (props.type === 'expenses') {
      setBills(exp)
    }
  }, [exp, inc])


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
        <div className="percentage">20%</div>
      </div>
    </Container>
  );
};

export default BudgetDisplay;

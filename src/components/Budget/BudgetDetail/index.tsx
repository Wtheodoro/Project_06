import { setRef } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExp, deleteInc } from '../../../store/ducks/budget/acrion';

import { Container } from './styles';

const BudgetDetail = (props: any) => {
  const [Re, setRe] = useState<boolean>(false)

  const [itens, setItens] = useState<any>([])
  const budgetState = useSelector((state: any) => state.reducerBudget)

  const dispatch = useDispatch()

  useEffect (() => {
    // isso ainda não funciona como deveria
    if (props.type === 'income' && budgetState.inc) {      
      setItens(budgetState.inc)
    } else if (props.type === 'expenses' && budgetState.exp) {
      setItens(budgetState.exp)
    }
  }, [budgetState])

  const deleteItem = (item: any) => {
    // const indexOfItem = itens.findIndex((element: any) => element.description === item.description)
    // itens.splice(indexOfItem, 1)
    // setRe(!Re)

    if (item.income) {
      console.log('income', item)
      dispatch(deleteInc(item))
      setRe(!Re)
    } else if (item.expenses) {
      console.log('expenses', item)
      dispatch(deleteExp(item))
      setRe(!Re)
    } else {
      return
    }
  }

  return (
    <Container>
      <h2>{props.type}</h2>
      {
        itens?.map((i: any) => (
          <div className={`${props.type}_list`}>
            <div className="line">
              <div className="item_description">{i.description}</div>
              <div className="right">
                <div className="item_value">+ {i.income || i.expenses}</div>
                <div className="item_delete">
                  <button className="item_delete_btn" onClick={()=>deleteItem(i)}>X</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      
    </Container>
  );
};

export default BudgetDetail;

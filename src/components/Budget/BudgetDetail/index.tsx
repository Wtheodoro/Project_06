import { setRef } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExp, deleteInc } from '../../../store/ducks/budget/acrion';
import { IoRemoveCircleOutline } from 'react-icons/io5'

import { Container } from './styles';

const BudgetDetail = (props: any) => {
  const [Re, setRe] = useState<boolean>(false)

  const [itens, setItens] = useState<any>([])
  const budgetState = useSelector((state: any) => state.reducerBudget)

  const dispatch = useDispatch()

  useEffect (() => {
    if (props.type === 'income' && budgetState.inc) {      
      setItens(budgetState.inc)
    } else if (props.type === 'expenses' && budgetState.exp) {
      setItens(budgetState.exp)
    }
  }, [budgetState])

  const deleteItem = (item: any) => {
    if (item.income) {
      dispatch(deleteInc(item))
      setRe(!Re)
    } else if (item.expenses) {
      dispatch(deleteExp(item))
      setRe(!Re)
    } else {
      return
    }
  }

  return (
    <Container>
      <div className={props.type}>
      <h2 className={`${props.type}_title`}>{props.type}</h2>
      {
        itens?.map((i: any) => (
          <div className={`${props.type}_list`} key={props.description}>
            <div className="item">
              <div className="item_description">{i.description}</div>
              <div className="right">
                <div className="item_value">+ {i.income || i.expenses}</div>
                <div className="item_delete">
                  <button className="item_delete_btn" onClick={()=>deleteItem(i)}><IoRemoveCircleOutline/></button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </Container>
  );
};

export default BudgetDetail;

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setExp, setInc } from '../../../store/ducks/budget/acrion';

import { Container } from './styles';

const BudgetInsert = () => {

  const description = useRef<HTMLInputElement>(null)
  const value = useRef<HTMLInputElement>(null)
  const selectType = useRef<HTMLSelectElement>(null)

  const dispatch = useDispatch()

  const add = () => {
    const type = selectType.current?.value
   
    if (type === 'inc') {
      dispatch(setInc({
        description: String(description.current?.value),
        income: Number(value.current?.value)
      }))
    } else if (type === 'exp') {
      dispatch(setExp({
        description: String(description.current?.value),
        expenses: Number(value.current?.value)
      }))
    }
  }

  return (
    <Container>
      <h1>BudgetInsert</h1>
      <select className="add_type" ref={selectType}>
        <option value='inc'>+</option>
        <option value='exp'>-</option>
      </select>
      <input type="text" className="add_description" placeholder="Description" ref={description}/>
      <input type="number" className="add_value" placeholder="Value" ref={value}/>
      <button className="add_btn" onClick={add}>add</button>
    </Container>
  );
};

export default BudgetInsert;

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExp, setInc } from '../../../store/ducks/budget/acrion';
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { Container } from './styles';

const BudgetInsert = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')

  const description = useRef<HTMLInputElement>(null)
  const value = useRef<HTMLInputElement>(null)
  const selectType = useRef<HTMLSelectElement>(null)

  const dispatch = useDispatch()

  const add = () => {
    const type = selectType.current?.value
   
    if (description.current?.value !== '' && value.current?.value) {
      if (type === 'inc') {
        dispatch(setInc({
          description: String(description.current?.value),
          income: Number(value.current?.value)
        }))
        setInputValue('')
        setInputDescription('')

      } else if (type === 'exp') {
        dispatch(setExp({
          description: String(description.current?.value),
          expenses: Number(value.current?.value)
        }))
        setInputValue('')
        setInputDescription('')

      }
    } else {
      alert('campo vazio')
    }

  }

  return (
    <Container>
      <select className="add_type" ref={selectType}>
        <option value='inc'>+</option>
        <option value='exp'>-</option>
      </select>
      <input type="text" className="add_description" placeholder="Description" ref={description} value={inputValue}
      onChange={e => setInputValue(e.target.value)}/>
      <input type="number" className="add_value" placeholder="Value" ref={value} value={inputDescription}
      onChange={e => setInputDescription(e.target.value)}/>
      <button className="add_btn" onClick={add}><IoChevronDownCircleOutline/></button>
    </Container>
  );
};

export default BudgetInsert;

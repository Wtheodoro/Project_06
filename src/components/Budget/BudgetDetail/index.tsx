import React from 'react';

import { Container } from './styles';

const BudgetDetail = (props: any) => {
  return (
    <Container>
      <h2>{props.type}</h2>
      <div className={`${props.type}_list`}>
        <div className="line">
          <div className="item_description">Salary</div>
          <div className="right">
            <div className="item_value">+ 4.400,00</div>
            <div className="item_delete">
              <button className="item_delete_btn">X</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BudgetDetail;

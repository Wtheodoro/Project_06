import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EspecifcCurrency from '../../components/EspecifcCurrency';
import { loadCoinsRequest, loadSpecificCurrencyRequest } from '../../store/ducks/coins/actions';
import { CoinReducerState, CoinType } from '../../store/ducks/coins/types';

import { Container } from './styles';

const Coins = () => {

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(loadCoinsRequest())
  }, [])

  const coins = useSelector((state: CoinReducerState) => state.reducerCoin.coins)

  const details = (coin: CoinType) => {
    dispatch(loadSpecificCurrencyRequest(coin.currency_code))
  }

  return (
    <Container>
      <h1>Coins</h1>
      <div className="list">
      {
        coins?.map((i: CoinType) => (
          <div key={i.name}>
            <p onClick={() => details(i)} key={i.name}>{i.name}</p>
          </div>
        ))
      }
      </div>
      <EspecifcCurrency />
    </Container>
  );
};

export default Coins;

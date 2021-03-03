import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EspecifcCurrency from '../../components/EspecifcCurrency';
import { loadCoinsRequest, loadSpecificCurrencyRequest } from '../../store/ducks/coins/actions';
import { CoinReducerState, CoinType } from '../../store/ducks/coins/types';
import { GridList, GridListTile} from '@material-ui/core'

import { Container } from './styles';
import NavBar from '../../components/NavBar';

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
      <NavBar />
      <div className="list">
      <h1>Currency</h1>

        <GridList cellHeight={50} cols={3}>
          {
            coins?.map((tile: CoinType) => (
              <GridListTile key={tile.name} cols={1}>
                <p onClick={() => details(tile)} key={tile.name}>{tile.name}</p>
              </GridListTile>
            ))
          }
        </GridList>
      </div>
      <EspecifcCurrency />
    </Container>
  );
};

export default Coins;

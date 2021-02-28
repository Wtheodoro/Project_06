import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

const EspecifcCurrency = () => {

  const [convertedCurrency, setConvertedCurrency] = useState<any>()
  const [ready, setReady] = useState<boolean>(false)

  const currencyDetails = useSelector((state: any) => state.reducerEspecificCurrency.currency.data)

  useEffect(() => {
    if (currencyDetails) {
      setReady(true)
      setConvertedCurrency(Object.values(currencyDetails))
    }
  }, [currencyDetails])

  console.log(currencyDetails)

  return (
    <Container>
      <h2>especifi currency</h2>
      {
        ready && convertedCurrency &&
        <>
          <p>Name: {convertedCurrency[0].name}</p>
          <p>Symbol: {convertedCurrency[0].symbol}</p>
          <p>Country code: {convertedCurrency[0].country_code}</p>
          <p>Mother land:{convertedCurrency[0].country_name}</p>
        </>
      }
    </Container>
  );
};

export default EspecifcCurrency;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

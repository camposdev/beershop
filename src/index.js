import React from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral';
import App from './App';
import * as serviceWorker from './serviceWorker';

numeral.register('locale', 'pt-br', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: (number) => (number === 1 ? 'er' : 'ème'),
  currency: {
    symbol: 'R$'
  }
});
numeral.locale('pt-br');

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

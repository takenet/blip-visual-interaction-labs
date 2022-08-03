import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

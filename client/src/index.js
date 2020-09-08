import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';

ReactDOM.render(
  /* Suspense used for i18n library, butwe can turn of in i18next.js: react: {wait: true, useSuspense: false} */
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById('root')
);
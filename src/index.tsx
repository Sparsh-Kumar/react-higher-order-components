import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import App from './App';
import './index.css';

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


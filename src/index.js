import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './hooks/toolsContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);

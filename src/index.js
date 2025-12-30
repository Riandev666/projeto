import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles';
import AppRoutes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle /> 
    <AppRoutes/>
  </React.StrictMode>
);
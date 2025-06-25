import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// ReactDOM ka andar ek function hai CreateRoot usme hum root ka id deta hai or fir render karta hai
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


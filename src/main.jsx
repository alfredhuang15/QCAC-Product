import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflowX = "hidden"; 

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

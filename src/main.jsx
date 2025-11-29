import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#000"; 
document.body.style.color = "#fff";
document.body.style.overflowX = "hidden"; 

document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";
document.documentElement.style.backgroundColor = "#000";

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

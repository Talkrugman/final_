import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom';

const apiHost = import.meta.env.VITE_API_HOST;

fetch(`${apiHost}/singers`)
  .then(res => res.json())
  .then(data => console.log(data));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

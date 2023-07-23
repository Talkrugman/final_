import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './store.js'
import { BrowserRouter, RouterProvider } from 'react-router-dom';

const apiHost = import.meta.env.VITE_API_HOST;

fetch(`${apiHost}/singers`)
  .then(res => res.json())
  .then(data => console.log(data));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
)

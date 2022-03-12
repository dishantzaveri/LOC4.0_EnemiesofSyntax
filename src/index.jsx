import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalProvider from './context/GlobalContext';
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {  MyContextProvider } from './Context-api/Contextapi.jsx';
import { Provider } from 'react-redux'
import { store } from './ReduxStore/Store.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MyContextProvider>
    <StrictMode>
      <Provider store={store}>
      <App />
    </Provider>,
    </StrictMode>
  </MyContextProvider>
  </BrowserRouter>
)

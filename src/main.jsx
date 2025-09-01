import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from "./redux/store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
<App />
      </Router>
       
    </Provider>
    
  </StrictMode>,
)

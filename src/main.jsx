import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App-v2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating maxRating={5} size={24} color="red"/> */}
  </StrictMode>,
)

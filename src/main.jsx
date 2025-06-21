import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import ReelCard from './Components/Cards/News.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

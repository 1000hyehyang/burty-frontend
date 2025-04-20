import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/variables.css"; // 색상 변수 추가
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

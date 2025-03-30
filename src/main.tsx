import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import I18nWrapper from './layout/i18nProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nWrapper>
      <App />
    </I18nWrapper>
  </StrictMode>,
)

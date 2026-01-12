import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FileProvider } from'./context/FileAndFolderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <FileProvider>
      <App />
     </FileProvider>
    </BrowserRouter>
    
  </StrictMode>,
)

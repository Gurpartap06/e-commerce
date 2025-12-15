import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './usecontext/Searchcontext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'
import { ThemeProvider } from './usecontext/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <ThemeProvider>

      
<SearchProvider>
 <App />
   </SearchProvider>
   </ThemeProvider>
    </Provider>
   
   
    
    
  </StrictMode>,
)
 
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './components/styles/global'
import { defaultTheme } from './components/styles/theme/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       
          <Router />
  
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
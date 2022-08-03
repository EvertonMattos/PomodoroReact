import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/global'

import { defaultTheme } from './components/styles/theme/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <BrowserRouter>
     <Router/>
     </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

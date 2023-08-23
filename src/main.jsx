import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from './styles/theme'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { NewMovie } from './pages/NewMovie'
import { MoviePreview } from './pages/MoviePreview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>,
)

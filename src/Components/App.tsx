import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'
import NotFound from './NotFound/NotFound'
import SEO from './SEO'
import SideBar from './Sidebar/Sidebar'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO />
    <Route component={SideBar} />
    <Switch>
      <Route exact path="/" />
      <Route component={NotFound} />
    </Switch>
  </ThemeProvider>
)

export default App

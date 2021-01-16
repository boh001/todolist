import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from 'styles/globalStyle'
import NotFound from './NotFound/NotFound'
import SideBar from './Sidebar/Sidebar'

const App = () => (
  <>
    <GlobalStyle />
    <Route component={SideBar} />
    <Switch>
      <Route exact path="/" />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App

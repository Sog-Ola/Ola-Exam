import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ListGithub from './pages/list-githubs.jsx'
import NotFound from './pages/not-found.jsx'
import SingleGithub from './pages/single-github.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ListGithub} />
        <Route exact path='/repository/:id' component={SingleGithub} />
        <Route exact path='/not-found' component={NotFound} />
        <Redirect exact from='*' to={'/not-found'} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes

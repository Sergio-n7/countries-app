import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import Home from './pages/Home'
import CountryCart from './pages/Country'
import AddedCountriesSite from './pages/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={withRouter(CountryCart)} />
    <Route exact path="/added-countries" component={AddedCountriesSite} />
  </Switch>
)

export default Routes

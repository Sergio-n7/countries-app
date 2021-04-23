import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CountryCart from './pages/Country'
import AddedCountriesSite from './pages/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/added-countries" component={AddedCountriesSite} />
    <Route exact path="/country:id" component={CountryCart} />
  </Switch>
)

export default Routes

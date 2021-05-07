import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddedCountriesSite from './pages/Country'
import CountryInfo from './pages/CountryInfo'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={CountryInfo} />
    <Route exact path="/added-countries" component={AddedCountriesSite} />
  </Switch>
)

export default Routes

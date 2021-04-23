import { combineReducers } from 'redux'

import product from './product'
import country from './countries'

//I need to combine the 2 reducers
const createRootReducer = () =>
  combineReducers({
    product,
    country,
  })

export default createRootReducer

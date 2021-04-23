import { Dispatch } from 'redux'
import {
  ADD_COUNTRY,
  Country,
  CountryActions,
  DELETE_COUNTRY,
  SET_COUNTRIES,
} from '../../types'

//I need to create the actions, must be the same we made the types
//Here is where I fetch the async data with Dispatch

export function AddCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function DeleteCountry(country: Country): CountryActions {
  return {
    type: DELETE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function setCountries(country: Country[]): CountryActions {
  return {
    type: SET_COUNTRIES,
    payload: {
      country,
    },
  }
}

export function fetchCountries() {
  return async (dispatch: Dispatch) => {
    const resp = await fetch('https://restcountries.eu/rest/v2/all')
    const country = await resp.json()
    dispatch(setCountries(country))
  }
}

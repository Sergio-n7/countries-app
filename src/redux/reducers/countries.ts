/* eslint-disable indent */

import {
  ADD_COUNTRY,
  CountryActions,
  CountryState,
  DELETE_COUNTRY,
  SET_COUNTRIES,
  SHOW_COUNTRY,
} from '../../types'

export default function country(
  state: CountryState = { allCountries: [], added: [], show: [] },
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { country } = action.payload
      //console.log(country)
      if (state.added.find((cnt) => cnt.name === country.name)) {
        return state
      }
      return { ...state, added: [...state.added, country] }
    }
    case DELETE_COUNTRY: {
      const { country } = action.payload
      let countryArray = state.added.filter((cnt) => cnt.name !== country.name)

      return { ...state, added: countryArray }
    }

    case SET_COUNTRIES: {
      return { ...state, allCountries: action.payload.country }
    }

    default:
      return state
  }
}

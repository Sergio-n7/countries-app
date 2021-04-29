// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
// i need to create the const to get the countries
export const SET_COUNTRIES = 'SET_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const DELETE_COUNTRY = 'DELETE_COUNTRY'
export const SHOW_COUNTRY = 'SHOW_COUNTRY'

//Countries types
export type SetCountriesAction = {
  type: typeof SET_COUNTRIES
  payload: {
    country: Country[]
  }
}

export type showCountry = {
  type: typeof SHOW_COUNTRY
  payload: {
    country: Country[]
  }
}

type Languages = {
  languages: string
  name: string
}

export type Country = {
  flag: string
  name: string
  population: number
  languages: Languages[]
  region: string
  capital?: string
  nativeName?: string
}

export type addCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type deleteCountryAction = {
  type: typeof DELETE_COUNTRY
  payload: {
    country: Country
  }
}

export type CountryState = {
  allCountries: Country[]
  added: Country[]
  show: Country[]
}

// I create the Union type
export type CountryActions =
  | SetCountriesAction
  | addCountryAction
  | deleteCountryAction
  | showCountry

// I create the AppState that contains all the state type I need
export type AppState = {
  product: ProductState
  country: CountryState
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

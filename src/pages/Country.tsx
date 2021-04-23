import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import ContainerCart from '../components/Container-cart'
import Header from '../components/Header'
import { AppState } from './../types'
import './styles.css'

export default function AddedCountriesSite() {
  const { added } = useSelector((state: AppState) => state.country)

  //console.log(added, 'these are all the countries in the card')
  return (
    <div>
      <div>
        <Header />
        <ContainerCart />
        {added.map((country) => (
          <CartItem key={country.name} country={country} />
        ))}
      </div>
    </div>
  )
}

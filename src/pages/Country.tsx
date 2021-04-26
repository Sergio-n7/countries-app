import React from 'react'
import { useSelector } from 'react-redux'
import BasquetText from '../components/BasquetText'
import CartItem from '../components/CartItem'
import ContainerCart from '../components/Container-cart'
import Footer2 from '../components/Footer2'
import Header from '../components/Header'
import { AppState } from './../types'
import './styles.css'

export default function AddedCountriesSite() {
  const { added } = useSelector((state: AppState) => state.country)

  //console.log(added, 'these are all the countries in the card')
  return (
    <div className="countries-container">
      <div>
        <Header />
        <div className="cart-container">
          <ContainerCart />
          <BasquetText />
          {added.map((country) => (
            <CartItem key={country.name} country={country} />
          ))}
        </div>
        <Footer2 />
      </div>
    </div>
  )
}

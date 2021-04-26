import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'
import CartItem from '../CartItem'
import './styles.css'

type CartProps = {
  count: number
}
export default function Cart({ count }: CartProps) {
  const { added } = useSelector((state: AppState) => state.country)

  //console.log(added, 'these are all the countries in the card')
  return (
    <div>
      <div>
        {added.map((country) => (
          <CartItem key={country.name} country={country} />
        ))}
      </div>
    </div>
  )
}

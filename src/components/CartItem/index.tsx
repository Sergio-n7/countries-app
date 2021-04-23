import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteCountry } from '../../redux/actions'
import { Country } from '../../types'
import Flag from '../Flag'
import './styles.css'

type CartItemProps = {
  country: Country
}
export default function CartItem({ country }: CartItemProps) {
  const dispatch = useDispatch()
  return (
    <div className="flag-display-cart">
      <div className="flag-cart-cart">
        <Flag flagUrl={country.flag} />
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td>{country.region}</td>
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events //
        eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <button onClick={() => dispatch(DeleteCountry(country))}>
          <i className="far fa-trash-alt icon"></i>
        </button>
      </div>
    </div>
  )
}

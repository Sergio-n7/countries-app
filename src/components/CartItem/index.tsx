import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
        <Link to={`/country/${country.name}`}>{country.name}</Link>
        <td className="cart-info">{country.capital}</td>
        <td className="cart-info">{country.region}</td>
        <div onClick={() => dispatch(DeleteCountry(country))}>
          <i className="far fa-trash-alt icon"></i>
        </div>
      </div>
    </div>
  )
}

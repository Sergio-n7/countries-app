import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCountry } from '../../redux/actions'
import { Country } from '../../types'
import Flag from '../Flag'

import './styles.css'

type TableRowProps = {
  country: Country
}

//I pass country and not the separate props because I will need the whole country object later
export default function TableRow({ country }: TableRowProps) {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flag-cart">
        <Flag flagUrl={country.flag} />
        <button
          className="visited"
          onClick={() => dispatch(AddCountry(country))}
        >
          <i className="fas fa-heart icon2"></i>
        </button>
      </div>
    </div>
  )
}

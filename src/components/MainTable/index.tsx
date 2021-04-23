import React from 'react'
//import Table from 'react-bootstrap/Table'
//import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { Country } from '../../types'

import './styles.css'

type mainTableProps = {
  countries: Country[]
}
export default function MainTable({ countries }: mainTableProps) {
  return (
    <div>
      <div className="flag-display">
        {countries.map((country) => (
          <TableRow key={country.name} country={country} />
        ))}
      </div>
    </div>
  )
}

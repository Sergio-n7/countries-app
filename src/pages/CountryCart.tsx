import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/cart'
import country from '../redux/reducers/countries'
import { AppState } from '../types'
import { Country } from '../types'
import { useParams } from 'react-router'
import axios from 'axios'

type CountryCartProps = {
  country: Country[]
}

export default function CountryCart() {
  const param = useParams<{ name: string }>() //{name: ..}
  const countryName = param.name

  const [country, setCountry] = useState<Country>()

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://restcountries.eu/rest/v2/name/${countryName}`
      )

      console.log('data', data)

      setCountry(data as any)
    }

    getData()
  }, [countryName])

  return (
    <div>
      hello
      <ul></ul>
    </div>
  )
}

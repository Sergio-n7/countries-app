import React, { useState, useEffect } from 'react'
import { Country } from '../types'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'
import ContainerCart from '../components/Container-cart'
import Flag2 from '../components/Flag 2'
import Footer3 from '../components/Footer3'

type CountryCartProps = {
  country: Country[]
  flagUrl: string
}

export default function CountryInfo({ country, flagUrl }: CountryCartProps) {
  const [showCountry, setShowCountry] = useState<Country>()
  const { name } = useParams<{ name: string }>()
  const url = `https://restcountries.com/v2/name/${name}`

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((Country) => {
        setShowCountry(Country[0])
        console.log(Country)
      })
  }, [url])

  return (
    <div className="countries-container">
      <Header />
      <div className="cart-container">
        <ContainerCart />
        {showCountry && (
          <ul className="parent-ul">
            <li className="flag-country">
              <Flag2 flagUrl={showCountry.flag} />
            </li>
            <li>
              <span>Name: </span>
              {showCountry.name}
            </li>
            <li>
              <span>Native name: </span>
              {showCountry.nativeName}
            </li>
            <li>
              <span>Region: </span>
              {showCountry?.region}
            </li>
            <li>
              <span>Population: </span>
              {showCountry.population}
            </li>
            <span>Language/s: </span>
            <ul className="language-borders-ul">
              {showCountry.languages.map((language) => (
                <li className="language-borders">{language.name}</li>
              ))}
            </ul>
            <li>
              <span>Capital: </span>
              {showCountry.capital}
            </li>
            {showCountry.currencies.map((currencie) => (
              <ul>
                <li className="currencie">
                  <span>Currencie: </span>
                </li>
                <ul className="nested-ul">
                  <li>
                    <span>Name: </span>
                    {currencie.name}
                  </li>
                  <li>
                    <span>Symbol: </span>
                    {currencie.symbol}
                  </li>
                </ul>

                <span>Borders: </span>
                <ul className="language-borders-ul">
                  {showCountry.borders.map((border) => (
                    <li className="language-borders">{border}</li>
                  ))}
                </ul>
              </ul>
            ))}
          </ul>
        )}
      </div>
      <div className="footer-container"></div>
      <Footer3 />
      <Footer2 />
    </div>
  )
}

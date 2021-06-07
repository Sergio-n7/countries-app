import React, { useState } from 'react'
import Container1 from '../components/Container1'
import Container2 from '../components/Container2'
import Container3 from '../components/container3'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainTable from '../components/MainTable'
import { SearchBar } from '../components/SearchBar'
import useCountries from '../hooks/useCountries'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [countries] = useCountries(keyword)
  //console.log(countries, 'from home 2')

  //console.log(added, 'added from home')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)

    //console.log(event.target.value);
  }

  return (
    <body className="App">
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <SearchBar keyword={keyword} handleChange={handleChange} />
      <MainTable countries={countries} />
      <Footer />
    </body>
  )
}

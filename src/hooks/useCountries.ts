//I copy useCountries from previos assignment
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../redux/actions'
import { AppState, Country } from '../types'

export default function useCountries(keyword: string): [Country[]] {
  const [filterCountries, setFilterCountries] = useState<Country[]>([])
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state: AppState) => state.country)
  //console.log(allCountries, 'from the hook')

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    let filterData = allCountries.filter((country) => {
      return (
        country.name.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.nativeName?.toLowerCase().search(keyword.toLowerCase()) !== -1
      )
    })

    setFilterCountries(filterData)
  }, [allCountries, keyword])

  return [filterCountries]
}

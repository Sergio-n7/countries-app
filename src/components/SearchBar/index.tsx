import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'
import './input.css'

type searchBarProps = {
  keyword: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchBar({ keyword, handleChange }: searchBarProps) {
  const { added } = useSelector((state: AppState) => state.country)

  return (
    <div className="container-input">
      <input
        className="input"
        type="text"
        name="search"
        placeholder="Search a country..."
        value={keyword}
        onChange={handleChange}
      />
    </div>
  )
}

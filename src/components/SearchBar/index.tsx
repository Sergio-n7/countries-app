import React from 'react'
import './input.css'

type searchBarProps = {
  keyword: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchBar({ keyword, handleChange }: searchBarProps) {
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

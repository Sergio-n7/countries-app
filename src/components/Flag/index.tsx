import React from 'react'

import './style.css'

//I need to create a type for the prop flagUrl

type FlagProps = {
  flagUrl: string
}

export default function Flag({ flagUrl }: FlagProps) {
  return (
    <div className="all-flag-display">
      <div className="flag-display">
        <img className="flag" src={flagUrl} alt="flag" />
      </div>
    </div>
  )
}

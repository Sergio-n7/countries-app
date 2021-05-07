import React from 'react'

import './style.css'

//I need to create a type for the prop flagUrl

type FlagProps = {
  flagUrl: string
}

export default function Flag2({ flagUrl }: FlagProps) {
  return (
    <div>
      <div>
        <img className="flag2" src={flagUrl} alt="flag" />
      </div>
    </div>
  )
}

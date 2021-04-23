import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import { Link } from 'react-router-dom'

export default function Header() {
  const count = useSelector((state: AppState) => state.country.added.length)
  const dispatch = useDispatch()
  return (
    <div>
      <header>
        <nav>
          <Link to="/" className="logo">
            Sergio-n7
          </Link>

          <ul>
            <li className="cart">
              <Link to="/added-countries">
                <i className="fas fa-globe-europe"></i>
                <span className="cart-counter">{count}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

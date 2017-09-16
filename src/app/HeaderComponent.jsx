import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/github">GitHub</Link>
      </li>
    </ul>
  )
}

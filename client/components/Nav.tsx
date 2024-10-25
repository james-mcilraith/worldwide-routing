import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/continents'

const Nav: React.FunctionComponent = () => {
  const continentNames = Object.keys(data)

  return (
    <nav role="navigation" aria-label="Main navigation">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {continentNames.map((name) => (
          <NavItem key={name} name={name} />
        ))}
      </ul>
    </nav>
  )
}

const NavItem: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <li>
    <Link to={`/continents/${name}`}>{name}</Link>
  </li>
)

export default Nav

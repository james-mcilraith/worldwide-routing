// Imports of library, link components, and data
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/continents'

// Extract the keys from the data object
const Nav: React.FunctionComponent = () => {
  const continentNames = Object.keys(data)

  // Navigation section with  accessibility role and label
  //  Includes list item (<li>) for the "Home" link and map function that iterates over continentNames to render a NavItem with a unique key for each continent
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

// NavItem component for navigation items links - URL in format continents/name
const NavItem: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <li>
    <Link to={`/continents/${name}`}>{name}</Link>
  </li>
)

// Export Nave to make the module available elsewhere
export default Nav

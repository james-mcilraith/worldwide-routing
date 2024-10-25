import { Link, useParams } from 'react-router-dom'
import data from '../../data/continents'

function ContinentID() {
  const { name } = useParams<{ name: string }>()
  const continent = name ? data[name] : undefined

  if (!continent) {
    return <h1>Continent not found</h1>
  }

  return (
    <div role="region" aria-label="Continent">
      <h1>{name}</h1>
      <img src={`/images/${continent.image}`} alt={`${name} landscape`} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {continent.countries.map((country) => (
          <li key={country.code}>
            <Link to={`/continent/${name}/${country.code}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContinentID

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import countries from '../../data/countries'
import data from '../../data/continents'

function CountryID() {
  const { continentName, countryCode } = useParams<{
    continentName: string
    countryCode: string
  }>()

  const continent = continentName ? data[continentName] : undefined
  const country = countries.find((c) => c.code === countryCode)

  if (!continent || !country) {
    return <h1>Country or continent not found</h1>
  }

  return (
    <div role="country" aria-label="Country">
      <h1>{country.name}</h1>
      <span
        aria-label={`${country.name} flag`}
        role="img"
        style={{ fontSize: '2em' }}
      >
        {country.flag}
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Capital: {country.capital}</li>
        <li>Area: {Number(country.areaSqKms).toLocaleString()} km²</li>
        <li>Population: {Number(country.population).toLocaleString()}</li>
        <li>
          Currency: {country.currencyName} ({country.currencyCode})
        </li>
        <li>
          Neighbors: <span> </span>
          <ul>
            {country.neighbours && country.neighbours.trim() !== '' ? (
              country.neighbours.split(',').map((neighborCode) => {
                const neighbor = countries.find(
                  (c) => c.code === neighborCode.trim(),
                )
                return neighbor ? (
                  <li key={neighbor.code}>
                    <Link to={`/continent/${continentName}/${neighbor.code}`}>
                      {neighbor.name}
                    </Link>
                  </li>
                ) : null
              })
            ) : (
              <li>No neighbors</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default CountryID

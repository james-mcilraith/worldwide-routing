// Import useParams, link, countries, and data
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import countries from '../../data/countries'
import data from '../../data/continents'

// Function that displays specific country information based on URL parameters
function CountryID() {
  const { continentName, countryCode } = useParams<{
    continentName: string
    countryCode: string
  }>()

  // Retrieves continent data and then countries based on countryCode
  const continent = continentName ? data[continentName] : undefined
  const country = countries.find((c) => c.code === countryCode)

  // Error handling, if either continent or country not found, returns error msg
  if (!continent || !country) {
    return <h1>Country or continent not found</h1>
  }

  // Return statement containing country details incl. country name and flag (flag size adjusted)
  //  Details list contains the home link, country capital 9or no capital), area, population (formatted toLocalString() for thousands seperator), and currency
  //  Neighbours list conditionally checks on country neighbours, maps to find neighbours, and creates link to their page (or displays 'no neighbours')
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
        <li>Capital: {country.capital ? country.capital : 'No capital'}</li>
        <li>Area: {Number(country.areaSqKms).toLocaleString()} km²</li>
        <li>Population: {Number(country.population).toLocaleString()}</li>
        <li>
          Currency: {country.currencyName} ({country.currencyCode})
        </li>
        <li>
          Neighbours: <span> </span>
          <ul>
            {country.neighbours && country.neighbours.trim() !== '' ? (
              country.neighbours.split(',').map((neighbourCode) => {
                const neighbour = countries.find(
                  (c) => c.code === neighbourCode.trim(),
                )
                return neighbour ? (
                  <li key={neighbour.code}>
                    <Link to={`/continent/${continentName}/${neighbour.code}`}>
                      {neighbour.name}
                    </Link>
                  </li>
                ) : null
              })
            ) : (
              <li>No neighbours</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  )
}

// Exports the CountryID component
export default CountryID

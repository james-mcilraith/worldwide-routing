import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import ContinentID from './components/Continent.tsx'
import CountryID from './components/Country.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="continents/:name" element={<ContinentID />} />
      <Route
        path="/continent/:continentName/:countryCode"
        element={<CountryID />}
      />
    </Route>,
  ),
)

export default router

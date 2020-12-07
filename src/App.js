import React, { useEffect ,useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

import './App.css'
import Login from './components/Login/Login'
import { getTokenFromUrl } from './spotify'

const spotify = new SpotifyWebApi()

const App = () => {
  const [token, setToken] = useState()

  useEffect(() => {
    const hash = getTokenFromUrl()
      window.location.hash = ''
      const _token = hash.access_token
    
      if (_token) {
        setToken(_token)
        spotify.setAccessToken(_token)
      }

      console.log('token', token)
  }, [])

  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login />}
    </div>
  )
}

export default App

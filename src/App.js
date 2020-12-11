import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

import Login from './components/Login/Login'
import { getTokenFromUrl } from './spotify'
import Player from './components/Player/Player'
import { useDataLayerValue } from './context/DataLayer'

const spotify = new SpotifyWebApi()

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
  
    if (_token) {
      spotify.setAccessToken(_token)
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      console.log('token', _token)
      spotify.getMe()
        .then(user => {
          dispatch({
            type: 'SET_USER',
            user,
          })
        })
        spotify.getUserPlaylists().then(playlists => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists,
          })
        })
        spotify.getPlaylist('3cEYpjA9oz9GiPac4AsH4n').then(playlist => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: playlist,
          })
        })
    }
    console.log(_token)
  }, [token, dispatch])

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App

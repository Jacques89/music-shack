require('dotenv').config()

export const authEndPoint = process.env.REACT_APP_AUTH_END_POINT
const redirectUri = process.env.REACT_APP_REDIRECT_URI
const clientId = process.env.REACT_APP_CLIENT_ID

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      
      return initial
    }, {})
}

export const loginUrl = 
  `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`
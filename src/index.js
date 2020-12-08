import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { DataLayer } from './context/DataLayer'
import App from './App'
import * as serviceWorker from './serviceWorker'
import reducer, { initialState } from './context/Reducer'

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
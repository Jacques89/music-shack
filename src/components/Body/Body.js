import React from 'react'

import './Body.scss'
import Header from '../Header/Header'
import { useDataLayerValue } from '../../context/DataLayer'
import SongRow from '../SongRow/SongRow'

import { PlayCircleFilled, Favorite, MoreHoriz } from '@material-ui/icons'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  const playPlayList = id => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
    .then(res => {
      spotify.getMyCurrentPlayingTrack().then(r => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item,
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true,
        })
      })
    })
  }

  const playSong = id => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
    .then(res => {
      spotify.getMyCurrentPlayingTrack().then(r => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item,
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true,
        })
      })
    })
  }

  return(
    <div className='body'>
      <Header spotify={spotify} />
      <img src={discover_weekly?.images[0].url} alt="" />
      <div className='body__info'>
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled 
            className='body__shuffle' 
            onClick={playPlayList}
          />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
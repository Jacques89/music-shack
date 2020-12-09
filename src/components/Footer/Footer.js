import React from 'react'
import './Footer.scss'
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer__left'>
        <img 
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=''
          className='footer__albumLogo'
        />
        <div className='footer__songInfo'>
          <h4>My Fav Song</h4>
          <p>Atharva</p>
        </div>
      </div>
      <div className='footer__center'>
        <Shuffle classname='footer__green' />
        <SkipPrevious className='footer__icon' />
        <PlayCircleOutline fontSize='large' className='footer__icon' />
        <SkipNext classname='footer__icon' />
        <Repeat classname='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Sidebar.scss'
import SidebarOption from '../SidebarOption/SidebarOption'
import { useDataLayerValue } from '../../context/DataLayer'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import { LibraryMusic } from '@material-ui/icons'

const Sidebar = () => {
  const [{ playlists }, dispatch]= useDataLayerValue()
  console.log(playlists)

  return(
    <div className='sidebar'>
      <img 
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />

      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusic} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
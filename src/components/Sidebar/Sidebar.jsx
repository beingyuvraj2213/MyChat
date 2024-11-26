import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='max-h-60 overflow-auto'>
      <SearchInput/>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar

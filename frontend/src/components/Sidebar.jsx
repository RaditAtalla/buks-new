import React from 'react'
import SidebarMenu from './SidebarMenu'
import { Grid, LogOut } from 'react-feather'

const Sidebar = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-around px-[1em]'>
      {/* logo */}
      <div className=''>
        <div className='flex items-center gap-[10px]'>
          <img src="img/logo-white.png" alt="logo" className='w-[70px] object-contain' />
          <div>
            <p className='font-black text-[1.5rem] leading-none'>BUKS</p>
            <p className='leading-none'>Perpustakaan Digital</p>
          </div>
        </div>
      </div>

      {/* menu */}
      <div>
        <div className='flex flex-col gap-[1em]'>
          <p className='text-[1.25rem] font-medium'>Admin</p>
          <div className='flex flex-col gap-[10px]'>
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
            <SidebarMenu icon={<Grid />} title={"Menu"} />
          </div>
        </div>
      </div>

      {/* logout */}
      <div>
        <div>
          <SidebarMenu icon={<LogOut />} title={"Log out"} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
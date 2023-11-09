import React from 'react'
import Logo from './_components/logo'
import { NavigationMenuBar } from './_components/menu'
import ActionButtons from './_components/buttons'

const Navbar = () => {
  return (
    <div>
      <div className="flex w-2/3 md:w-1/2">
        <Logo />
        <NavigationMenuBar />
      </div>
      <ActionButtons />
    </div>
  )
}

export default Navbar

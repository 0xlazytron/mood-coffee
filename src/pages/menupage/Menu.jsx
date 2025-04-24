import React from 'react'
import { Footer, MenuButtons, MenuHero, Navbar, Ourmenu, ProductDetail } from '../../components'

const Menu = () => {
  return (
    <div>
        <Navbar />
        <MenuHero />
        <MenuButtons />
        <Ourmenu />
        <Footer />
    </div>
  )
}

export default Menu
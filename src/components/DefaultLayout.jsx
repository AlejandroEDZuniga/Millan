import React from 'react'
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import  Home  from "./Home"
import  Navbar  from "./Navbar"
import Search from './Search'

const DefaultLayout = () => {
  return (
    <div>
      < Navbar/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Home />
        <div className="body flex-grow-1 px-3">
          <Search />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout

import React from 'react'
import Header from './component/Header/header'
import Footer from './component/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />

   </>
  )
}

export default Layout

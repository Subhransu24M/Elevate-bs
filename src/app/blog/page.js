import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import NavBar from '../components/NavBar/NavBar'
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import Blog from './Blog'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Blog"/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default page
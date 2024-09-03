import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import NavBar from '@/app/components/NavBar/NavBar'
import TopBar from '@/app/components/TopBar/TopBar'
import React from 'react'
import RasaBdcnt from './RasaBdcnt'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Restaurant Accounting Service in ADGM" />
    <RasaBdcnt/>
    <Footer/>
    </>
  )
}

export default page
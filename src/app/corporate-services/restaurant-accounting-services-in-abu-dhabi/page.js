import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import NavBar from '@/app/components/NavBar/NavBar'
import TopBar from '@/app/components/TopBar/TopBar'
import React from 'react'
import RasaBdcnt from './RasaBdcnt'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Restaurant Accounting Service in ADGM" backgroundImage={breadcrumbBackground}/>
    <RasaBdcnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
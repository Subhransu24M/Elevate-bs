import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
// import Footer from '@/app/components/Footer/Footer'
// import NavBar from '@/app/components/NavBar/NavBar'
// import TopBar from '@/app/components/TopBar/TopBar'
import React from 'react'
import RasaBdcnt from './RasaBdcnt'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Restaurant Accounting Service in ADGM",
  description: "At Elevate Business Solutions, we specialize in providing comprehensive restaurant accounting services in Abu Dhabi.",
};

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
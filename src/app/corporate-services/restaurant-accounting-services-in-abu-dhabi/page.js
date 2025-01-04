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
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/restaurant-accounting-services-in-abu-dhabi", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Restaurant Accounting Service in ADGM',
    description: "At Elevate Business Solutions, we specialize in providing comprehensive restaurant accounting services in Abu Dhabi.",
    url: 'https://www.elevatebs.com/corporate-services/restaurant-accounting-services-in-abu-dhabi',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Restaurant Accounting Service in ADGM',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Accounting Service in ADGM',
    description: "At Elevate Business Solutions, we specialize in providing comprehensive restaurant accounting services in Abu Dhabi.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
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
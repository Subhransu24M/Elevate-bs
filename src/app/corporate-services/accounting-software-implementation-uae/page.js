import TopBar from '@/app/components/TopBar/TopBar'
import './accnsoft.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import AccnSoftImplCnt from './AccnSoftImplCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Expert Accounting Software Implementation in UAE |  Elevate Business Solutions",
  description: "Seamless Accounting Software Implementation in the UAE. Elevate Business Services ensures efficient and error-free financial management for your business.",
  keywords: "Accounting Software Implementation in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/accounting-software-implementation-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Expert Accounting Software Implementation in UAE |  Elevate Business Solutions',
    description: "Seamless Accounting Software Implementation in the UAE. Elevate Business Services ensures efficient and error-free financial management for your business.",
    url: 'https://www.elevatebs.com/corporate-services/accounting-software-implementation-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Expert Accounting Software Implementation in UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Accounting Software Implementation in UAE |  Elevate Business Solutions',
    description: "Seamless Accounting Software Implementation in the UAE. Elevate Business Services ensures efficient and error-free financial management for your business.",
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
    <BreadCrumb page="Accounting software Implementation" backgroundImage={breadcrumbBackground}/>
    <AccnSoftImplCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}
export default page
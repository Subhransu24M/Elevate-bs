import TopBar from '@/app/components/TopBar/TopBar'
import './iso.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import IsoCnt from './IsoCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "ISO Certification in UAE | ISO consultants in Dubai",
  description: "Elevate Business Services offers ISO certification services in the UAE. Ensure compliance and quality excellence for your business with our expert ISO consultants.",
  keywords: "ISO Certification in UAE,ISO Consulting in UAE, ISO Consultants in UAE,ISO Certificate in UAE, ISO certification consultant in uae",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/iso-certification-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'ISO Certification in UAE | ISO consultants in Dubai',
    description: "Elevate Business Services offers ISO certification services in the UAE. Ensure compliance and quality excellence for your business with our expert ISO consultants.",
    url: 'https://www.elevatebs.com/corporate-services/iso-certification-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'ISO Certification in UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO Certification in UAE | ISO consultants in Dubai',
    description: "Elevate Business Services offers ISO certification services in the UAE. Ensure compliance and quality excellence for your business with our expert ISO consultants.",
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
    <BreadCrumb page='ISO Certification' backgroundImage={breadcrumbBackground}/>
    <IsoCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
    

  )
}

export default page
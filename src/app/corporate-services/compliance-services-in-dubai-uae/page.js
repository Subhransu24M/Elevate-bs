import TopBar from '@/app/components/TopBar/TopBar'
import './compliance.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import ComplianceCnt from './ComplianceCnt'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Compliance Services in UAE | Elevate Business Solutions",
  description: "Ensure seamless compliance in Dubai, UAE, with Elevate Business Services. Discover expert compliance services tailored to your business needs.",
  keywords: "Compliance Services in Dubai UAE,Aml Compliance Services in Dubai,Compliance services in UAE,Tax Compliance Services in Dubai,UBO Compliance Services in Dubai,ESR Compliance Services in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/compliance-services-in-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Compliance Services in UAE | Elevate Business Solutions',
    description: "Ensure seamless compliance in Dubai, UAE, with Elevate Business Services. Discover expert compliance services tailored to your business needs.",
    url: 'https://www.elevatebs.com/corporate-services/compliance-services-in-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Compliance Services in UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance Services in UAE | Elevate Business Solutions',
    description: "Ensure seamless compliance in Dubai, UAE, with Elevate Business Services. Discover expert compliance services tailored to your business needs.",
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
    <BreadCrumb page="Compliance Services" backgroundImage={breadcrumbBackground}/>
    <ComplianceCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
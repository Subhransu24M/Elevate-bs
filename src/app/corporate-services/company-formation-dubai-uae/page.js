import TopBar from '@/app/components/TopBar/TopBar'
import './company.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import CompanyFormationCnt from './CompanyFormationCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Company Formation in Dubai | usiness setup consultant in Dubai,UAE",
  description: "Seamless company formation in Dubai, UAE with Elevate Business Services. We handle the complexities, so you can focus on your business's success.",
  keywords: "Company Formation in Dubai,UAE Free Zone Company Setup,Mainland Company Setup,Offshore company setup in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/company-formation-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Company Formation in Dubai | usiness setup consultant in Dubai,UAE',
    description: "Seamless company formation in Dubai, UAE with Elevate Business Services. We handle the complexities, so you can focus on your business's success.",
    url: 'https://www.elevatebs.com/corporate-services/company-formation-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Company Formation in Dubai',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Formation in Dubai | usiness setup consultant in Dubai,UAE',
    description: "Seamless company formation in Dubai, UAE with Elevate Business Services. We handle the complexities, so you can focus on your business's success.",
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
    <BreadCrumb page="Company Formation" backgroundImage={breadcrumbBackground}/>
    <CompanyFormationCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
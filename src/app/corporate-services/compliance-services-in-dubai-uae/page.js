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
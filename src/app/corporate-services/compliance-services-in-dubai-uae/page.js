import TopBar from '@/app/components/TopBar/TopBar'
import './compliance.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import ComplianceCnt from './ComplianceCnt'

export const metadata = {
  title: "Compliance Services in UAE | Elevate Business Solutions",
  description: "Ensure seamless compliance in Dubai, UAE, with Elevate Business Services. Discover expert compliance services tailored to your business needs.",
  keywords: "Compliance Services in Dubai UAE,Aml Compliance Services in Dubai,Compliance services in UAE,Tax Compliance Services in Dubai,UBO Compliance Services in Dubai,ESR Compliance Services in Dubai"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Compliance Services" />
    <ComplianceCnt/>
    <Footer/>
    </>
  )
}

export default page
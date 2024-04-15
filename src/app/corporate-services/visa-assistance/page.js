import TopBar from '@/app/components/TopBar/TopBar'
import './visaasst.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VisaAsstCnt from './VisaAsstCnt'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "Get UAE Visa Assistance with  Elevate Business Solutions",
  description: "Secure your UAE visa with ease through Elevate Business Solutions. Our expert team provides comprehensive visa assistance services, ensuring a smooth and hassle-free process for your journey to the United Arab Emirates.",
  keywords: "Best Visa Agencies in Dubai UAE, Visa Assistance Services in Dubai,apply online for Dubai visa,Dubai Visa Assistance Service,Dubai Visa Assistance Services and Consultants in Dubai"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Visa Assistance" />
    <VisaAsstCnt/>
    <Footer/>
    </>
  )
}

export default page
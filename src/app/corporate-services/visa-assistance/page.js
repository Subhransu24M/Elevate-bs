import TopBar from '@/app/components/TopBar/TopBar'
import './visaasst.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VisaAsstCnt from './VisaAsstCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Get UAE Visa Assistance with  Elevate Business Solutions",
  description: "Secure your UAE visa with ease through Elevate Business Solutions. Our expert team provides comprehensive visa assistance services, ensuring a smooth and hassle-free process for your journey to the United Arab Emirates.",
  keywords: "Best Visa Agencies in Dubai UAE, Visa Assistance Services in Dubai,apply online for Dubai visa,Dubai Visa Assistance Service,Dubai Visa Assistance Services and Consultants in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/visa-assistance", // Specify the canonical URL for this page
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
    <BreadCrumb page="Visa Assistance" backgroundImage={breadcrumbBackground}/>
    <VisaAsstCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
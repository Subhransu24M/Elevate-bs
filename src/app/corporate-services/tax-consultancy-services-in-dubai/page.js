import TopBar from '@/app/components/TopBar/TopBar'
import './tax.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import TaxContent from './TaxContent'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Tax Consultancy in Dubai - Trusted tax advisor in the UAE",
  description: "Looking for top-notch corporate tax  consultancy services in UAE, ? Elevate Business Services has trusted tax advisor in the UAE for your corporate tax needs. Explore our services now!",
  keywords: "Tax Consultants in Dubai UAE,Tax Consultancy in Dubai UAE,Tax Consulting Services in UAE,Tax Consultant Firms in Dubai UAE,Corporate Tax Consultants in Dubai UAE,Best Corporate Tax Consultants in Dubai UAE,Tax Advisors in UAE,Tax Consultant in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/tax-consultancy-services-in-dubai", // Specify the canonical URL for this page
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
    <BreadCrumb page="TAX Consultancy" backgroundImage={breadcrumbBackground}/>
    <TaxContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
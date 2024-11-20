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
  keywords: "Tax Consultants in Dubai UAE,Tax Consultancy in Dubai UAE,Tax Consulting Services in UAE,Tax Consultant Firms in Dubai UAE,Corporate Tax Consultants in Dubai UAE,Best Corporate Tax Consultants in Dubai UAE,Tax Advisors in UAE,Tax Consultant in Dubai"
};
const page = () => {
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Corporate TAX Service"/>
    <TaxContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
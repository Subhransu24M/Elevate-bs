import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import FooterNew from '../components/Footer/FooterNew'
import NavBar from '../components/NavBar/NavBar'
import NewNavbar from '../components/NavBar/NewNavbar'
import TopBar from '../components/TopBar/TopBar'
import EcommContent from './EcommContent'
import './ecomm.css'

export const metadata = {
  title: "eCommerce Website Development Company London, UK ",
  description: "Drive eCommerce growth with top eCommerce Website Development Company London, UK. We transform your online store with user-friendly designs.",
  keywords:"ecommerce website development company london uk,ecommerce website development london,ecommerce website agency london,ecommerce website design in london,ecommerce website development services uk",
  alternates: {
    canonical: "https://www.elevatebs.com/ecommerce-solutions", // Specify the canonical URL for this page
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/web-development.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="ECommerce Solutions" backgroundImage={breadcrumbBackground}/>
    <EcommContent/>
    <FooterNew/>
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default page
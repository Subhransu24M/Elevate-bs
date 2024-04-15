import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import EcommContent from './EcommContent'
import './ecomm.css'

export const metadata = {
  title: "eCommerce Website Development Company London, UK ",
  description: "Drive eCommerce growth with top eCommerce Website Development Company London, UK. We transform your online store with user-friendly designs.",
  keywords:"ecommerce website development company london uk,ecommerce website development london,ecommerce website agency london,ecommerce website design in london,ecommerce website development services uk",
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="ECommerce Solutions" />
    <EcommContent/>
    
    <Footer/>
    </>
  )
}

export default page
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import EcommContent from './EcommContent'
import './ecomm.css'

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
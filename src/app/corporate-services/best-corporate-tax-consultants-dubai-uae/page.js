import TopBar from '@/app/components/TopBar/TopBar'
import './tax.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import TaxContent from './TaxContent'
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Corporate TAX Service"/>
    <TaxContent/>
    <Footer/>
    </>
  )
}

export default page
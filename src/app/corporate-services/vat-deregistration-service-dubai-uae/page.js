import TopBar from '@/app/components/TopBar/TopBar'
import './vatdereg.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VatDeRegCnt from './VatDeRegCnt'
import Footer from '@/app/components/Footer/Footer'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="VAT De-Registration"/>
    <VatDeRegCnt/>
    <Footer/>
    </>
  )
}

export default page
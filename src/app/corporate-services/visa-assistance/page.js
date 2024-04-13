import TopBar from '@/app/components/TopBar/TopBar'
import './visaasst.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VisaAsstCnt from './VisaAsstCnt'
import Footer from '@/app/components/Footer/Footer'

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
import TopBar from '@/app/components/TopBar/TopBar'
import './compliance.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import Footer from '@/app/components/Footer/Footer'
import ComplianceCnt from './ComplianceCnt'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Compliance Services" />
    <ComplianceCnt/>
    <Footer/>
    </>
  )
}

export default page
import TopBar from '@/app/components/TopBar/TopBar'
import './accnsoft.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import AccnSoftImplCnt from './AccnSoftImplCnt'
import Footer from '@/app/components/Footer/Footer'
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Accounting software Implementation" />
    <AccnSoftImplCnt/>
    <Footer/>
    </>
  )
}

export default page
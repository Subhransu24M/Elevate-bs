import TopBar from '@/app/components/TopBar/TopBar'
import './accnsoft.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import AccnSoftImplCnt from './AccnSoftImplCnt'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "Expert Accounting Software Implementation in UAE |  Elevate Business Solutions",
  description: "Seamless Accounting Software Implementation in the UAE. Elevate Business Services ensures efficient and error-free financial management for your business.",
  keywords: "Accounting Software Implementation in UAE"
};

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
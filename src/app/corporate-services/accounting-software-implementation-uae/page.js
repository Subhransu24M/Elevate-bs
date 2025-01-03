import TopBar from '@/app/components/TopBar/TopBar'
import './accnsoft.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import AccnSoftImplCnt from './AccnSoftImplCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Expert Accounting Software Implementation in UAE |  Elevate Business Solutions",
  description: "Seamless Accounting Software Implementation in the UAE. Elevate Business Services ensures efficient and error-free financial management for your business.",
  keywords: "Accounting Software Implementation in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/accounting-software-implementation-uae", // Specify the canonical URL for this page
  },
};

const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Accounting software Implementation" backgroundImage={breadcrumbBackground}/>
    <AccnSoftImplCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}
export default page
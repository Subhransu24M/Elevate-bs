import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import AuditAssurancecnt from "./AuditAssuranceCnt"
import './auditassurance.css';

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page='Audit & Assurance Service'/>
    <AuditAssurancecnt/>
    <Footer/>

    </>
  )
}

export default page
import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import AuditAssurancecnt from "./AuditAssuranceCnt"
import './auditassurance.css';
import NewNavbar from "@/app/components/NavBar/NewNavbar"
import FooterNew from "@/app/components/Footer/FooterNew"


export const metadata = {
  title: "Auditing Services in UAE  |Approved  Auditors in UAE",
  description: "Reliable Auditing Services in UAE await you at Elevate Business Services.Elevate Business Services' audit and assurance expertise is at your disposal",
  keywords: "Auditing Firms in UAE,Audit Services in UAE, Audit and Assurance Services in UAE, Auditors in UAE, Audit Firm in UAE"
};
const page = () => {
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page='Audit & Assurance Service'/>
    <AuditAssurancecnt/>
    <FooterNew/>
    {/* <Footer/> */}
    </div>

    </>
  )
}

export default page
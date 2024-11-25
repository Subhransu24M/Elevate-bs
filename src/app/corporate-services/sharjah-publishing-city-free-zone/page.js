import TopBar from "@/app/components/TopBar/TopBar";
import SpcCnt from "./SpcCnt";
import NavBar from "@/app/components/NavBar/NavBar";
import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb";
import Footer from "@/app/components/Footer/Footer";
import './spc.css'
import NewNavbar from "@/app/components/NavBar/NewNavbar";
import FooterNew from "@/app/components/Footer/FooterNew";
export const metadata = {
    title: "Sharjah Publishing City (SPC) Freezone | Elevate Business Solutions",
    description: "SPC Free Zone is the smarter, easier, simpler, and faster choice for entrepreneurs looking to set up their business in the UAE",
    keywords: "spc freezone,sharjah publishing city freezone"
  };

const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="SPC Freezone" backgroundImage={breadcrumbBackground}/>
    <SpcCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
    
  )
}

export default page
import TopBar from "@/app/components/TopBar/TopBar";
import SpcCnt from "./SpcCnt";
import NavBar from "@/app/components/NavBar/NavBar";
import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb";
import Footer from "@/app/components/Footer/Footer";
import './spc.css'
export const metadata = {
    title: "Sharjah Publishing City (SPC) Freezone | Elevate Business Solutions",
    description: "SPC Free Zone is the smarter, easier, simpler, and faster choice for entrepreneurs looking to set up their business in the UAE",
    keywords: "spc freezone,sharjah publishing city freezone"
  };

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="SPC Freezone" />
    <SpcCnt/>
    <Footer/>
    </>
    
  )
}

export default page
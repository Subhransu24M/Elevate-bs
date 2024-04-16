import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import GoogleAdsCnt from "./GoogleAdsCnt"
import './googleads.css';
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Google Ads Service"/>
    <GoogleAdsCnt/>
    <Footer/>
    </>
  )
}

export default page
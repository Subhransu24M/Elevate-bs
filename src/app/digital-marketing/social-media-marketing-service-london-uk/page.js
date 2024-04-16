import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import TopBar from "../../components/TopBar/TopBar"
import SocialMediaCnt from "./SocialMediaCnt"
import './socialmedia.css'
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="SMO/SMM Service"/>
    <SocialMediaCnt/>
    <Footer/>
    </>
  )
}

export default page
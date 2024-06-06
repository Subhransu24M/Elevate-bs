import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import TopBar from "../../components/TopBar/TopBar"
import SocialMediaCnt from "./SocialMediaCnt"
import './socialmedia.css'

export const metadata = {
  title: "Social Media Marketing Agency in London, UK | Elevate Business Solutions ",
  description: "Being one of the Top Social Media Marketing Agency in London, UK, we knows how to captivate audiences. Reach, engage, and grow your brand today.",
  keywords: "Social Media Marketing Agency in London"
};
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
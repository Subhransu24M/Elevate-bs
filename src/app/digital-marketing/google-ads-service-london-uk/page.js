import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import GoogleAdsCnt from "./GoogleAdsCnt"
import './googleads.css';

export const metadata = {
  title: "PPC Agency in London, UK | Elevate Business Solutions ",
  description: "Maximize Google Ads potential with the top PPC Agency in London, UK. Convert intent into valuable customers, across all devices.",
  keywords: "PPC Agency in London"
};
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
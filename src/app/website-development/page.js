import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
import WebDevelopContent from "./WebDevelopContent";

export const metadata = {
    title: "Website Development Company in UK ",
    description: "Elevate Business Solutions",
  };
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Website Development"/>
    <WebDevelopContent/>
    <Footer/>
    </>
  )
}

export default page
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
import AboutContent from "./AboutContent"


export const metadata = {
  title: "Elevate Business Solution - About us",
  description: "Elevate Business Solutions",
};
const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <BreadCrumb page="About Us" />
      <AboutContent/>
      <Footer />

    </>
  )
}

export default page
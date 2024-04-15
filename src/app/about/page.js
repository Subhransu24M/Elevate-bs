import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
import AboutContent from "./AboutContent"


export const metadata = {
  title: "About - Elevate Business Solutions DMCC",
  description: "Capitalizing on its 15 years of cutting edge expertise in Corporate Services, IT Services & Digital Marketing.We have experienced team members giving their hands in enabling the business grow.",
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
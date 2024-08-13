import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import FreelancevisaCnt from "./FreelancevisaCnt"


const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Freelance Visa Dubai" />
    <FreelancevisaCnt/>
    <Footer/>
    </>
  )
}

export default page
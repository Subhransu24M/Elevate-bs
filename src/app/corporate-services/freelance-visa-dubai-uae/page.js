import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import FreelancevisaCnt from "./FreelancevisaCnt"

export const metadata = {
  title: "Freelance Visa Dubai, UAE | Elevate Business Solutions",
  description: "Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle.",
  keywords: "freelance visa dubai,freelance visa uae"
};

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
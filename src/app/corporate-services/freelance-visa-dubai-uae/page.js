import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import FreelancevisaCnt from "./FreelancevisaCnt"
import NewNavbar from "@/app/components/NavBar/NewNavbar"
import FooterNew from "@/app/components/Footer/FooterNew"

export const metadata = {
  title: "Freelance Visa Dubai, UAE | Elevate Business Solutions",
  description: "Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle.",
  keywords: "freelance visa dubai,freelance visa uae",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/freelance-visa-dubai-uae", // Specify the canonical URL for this page
  },
};

const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Freelance Visa Dubai" backgroundImage={breadcrumbBackground}/>
    <FreelancevisaCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
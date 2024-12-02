import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
// import Footer from "@/app/components/Footer/Footer"
// import NavBar from "@/app/components/NavBar/NavBar"
// import TopBar from "@/app/components/TopBar/TopBar"
import GoogleAdsCnt from "./GoogleAdsCnt"
import './googleads.css';
import NewNavbar from "@/app/components/NavBar/NewNavbar"
import FooterNew from "@/app/components/Footer/FooterNew"

export const metadata = {
  title: "PPC Agency in London, UK | Elevate Business Solutions ",
  description: "Maximize Google Ads potential with the top PPC Agency in London, UK. Convert intent into valuable customers, across all devices.",
  keywords: "PPC Agency in London"
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/google-ads.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Google Ads Service" backgroundImage={breadcrumbBackground}/>
    <GoogleAdsCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
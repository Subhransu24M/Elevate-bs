import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import AdgmcompanySetup from "./AdgmcompanySetup";

export const metadata = {
  title: "ADGM Business Setup | Elevate ",
  description: "Setting up your company in the Abu Dhabi Global Market (ADGM) offers a world-class environment for businesses to grow, innovate, and expand. ",
  keywords: "adgm company setup,adgm company registration, adgm company formation,adgm business setup",
  alternates: {
    canonical: "https://www.elevatebs.com/adgm-company-setup", // Specify the canonical URL for this page
  },
};

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/bookkeeping.jpg";
    return (
        <>
        <div className="fullwrapper">
          <NewNavbar/>
          <BreadCrumb page="ADGM Company Setup" backgroundImage={breadcrumbBackground}/>
          <AdgmcompanySetup/>
          <FooterNew/>
        </div>
        </>
    )
}
export default page
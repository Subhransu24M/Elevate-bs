import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TopBar from "../components/TopBar/TopBar";
import AdgmContent from "./AdgmContent";

export const metadata = {
    title: "Company Service Provider For ADGM | Elevate ",
    description: "Company Service Provider for ADGM: Elevate offers streamlined setup, 100% foreign ownership, and expert compliance support in Abu Dhabi's financial hub. ",
    keywords: "adgm company service provider,Company Service Provider For ADGM",
  };
  const page = () => {
    return (
      <>
        <TopBar/>
        <NavBar/>
        <BreadCrumb page="ADGM Company Formation" />
        <AdgmContent/>
        <Footer/>
  
      </>
    )
  }
  
  export default page
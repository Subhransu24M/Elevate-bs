import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TopBar from "../components/TopBar/TopBar";
import AdgmContent from "./AdgmContent";

export const metadata = {
    title: "ADGM Company Formation in UAE",
    description: "At Elevate Business Solutions, we specialize in providing complete company services that facilitate smooth and efficient ADGM incorporation in UAE. ",
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
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import AdgmcompanySetup from "./AdgmcompanySetup";

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
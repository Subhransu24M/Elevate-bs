import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import AdgmServices from "./AdgmServices";
import './adgm.css';

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/adgm.jpg";
    return(
        <>
         <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page ="ADGM Services" backgroundImage={breadcrumbBackground}/>
            <AdgmServices/>
            <FooterNew/>
         </div>
        </>
    )
}
export default page
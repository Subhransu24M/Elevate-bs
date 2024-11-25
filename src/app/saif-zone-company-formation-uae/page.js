import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import SaifzoneCnt from "./SaifzoneCnt";

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/saif-zone.jpg";
    return(
        <>
        <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page="SAIF Zone Company Formation" backgroundImage={breadcrumbBackground}/>
            <SaifzoneCnt/>
            <FooterNew/>
        </div>
        </>
    )
}
export default page
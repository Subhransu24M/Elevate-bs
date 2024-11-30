import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import './business-formation.css';
import BusinessformationCnt from "./BusinessformationCnt";

export const metadata = {
    title: "Business Formation Services UAE",
    description: "Elevate offers complete services to facilitate your business setup in Dubai. From helping you choose the right business ",
  };

const page = () => {
    const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
    return (
        <>
        <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page="Business Formation" backgroundImage={breadcrumbBackground}/>
            <BusinessformationCnt/>
            <FooterNew/>
        </div>
        </>
    )
}
export default page
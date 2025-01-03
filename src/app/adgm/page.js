import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import AdgmServices from "./AdgmServices";
import './adgm.css';

export const metadata = {
    title: "ADGM Corporate Services,UAE",
    description: "Elevate is one of the best Approved Auditors in ADGM, renowned for providing reliable services for over a decade.",
    alternates: {
        canonical: "https://www.elevatebs.com/adgm", // Specify the canonical URL for this page
      },
  };

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
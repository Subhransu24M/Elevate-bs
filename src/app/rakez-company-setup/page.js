import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import './rakez.css';
import RakezCnt from "./RakezCnt";

export const metadata = {
    title: "RAKEZ Free Zone Company Setup | RAKEZ Free Zone Company Setup Cost ",
    description: "Explore cost-effective RAKEZ Free Zone Company Setup with 100% ownership, tax benefits, and diverse licenses. Start your business in Ras Al Khaimah today!",
    keywords : "RAKEZ Free Zone Company Setup, RAKEZ Free Zone Company Setup Cost, RAK Free Zone Company Formation, RAKEZ Business Setup, RAKEZ Free Zone License Cost, ras al khaimah free zone company setup cost, rakez company setup, rakez company setup cost, rakez company setup price, rakez company setup uae, types of business licenses issued by RAKEZ, company formation experts at RAKEZ, set up a company in Ras Al Khaimah",
    alternates: {
        canonical: "https://www.elevatebs.com/rakez-company-setup", // Specify the canonical URL for this page
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/about-dubai.jpg";
    return(
        <>
         <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page="RAKEZ Company Setup" backgroundImage={breadcrumbBackground}/>
            <RakezCnt/>
            <FooterNew/>
         </div>
        </>
    )
}
export default page
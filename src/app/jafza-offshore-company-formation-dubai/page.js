import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import JafzaCnt from "./JafzaCnt";
import './jafza-offshore.css';
export const metadata = {
    title: "JAFZA Offshore Company Formation Dubai | Cost, Process & Benefits",
    description: "Simplify your JAFZA offshore company formation in Dubai. Discover competitive costs, tax benefits, asset protection, and efficient processes. Start your global journey today!",
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/about-dubai.jpg";
    return(
        <>
        <NewNavbar/>
        <BreadCrumb page="JAFZA Offshore Company Formation" backgroundImage={breadcrumbBackground}/>
        <JafzaCnt/>
        <FooterNew/>
        </>
    )
}
export default page
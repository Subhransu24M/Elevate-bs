import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import SaifzoneCnt from "./SaifzoneCnt";

export const metadata = {
    title: "SAIF Zone Company Formation | Business Setup in Sharjah Free Zone ",
    description: "Explore SAIF Zone company formation with cost-effective packages, quick licenses, and expert support. Start your business setup in Sharjah Free Zone today! ",
    keywords: "SAIF Zone Company Formation,Company Formation in Saif Zone,SAIF Zone Business Setup Cost,Business Setup in Sharjah Airport Free Zone,Company Formation in Sharjah Free Zone,company formations in  UAE,company registration in saif zone",
    alternates: {
        canonical: "https://www.elevatebs.com/saif-zone-company-formation-uae", // Specify the canonical URL for this page
      },
  };

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
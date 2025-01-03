import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import BookkeepingabudhabiCnt from "./BookkeepingabudhabiCnt";

export const metadata = {
    title: "Accounting & bookkeeping services in ADGM,UAE",
    description: "Expert accounting & bookkeeping services in ADGM by Elevate. Streamline compliance, boost growth & gain strategic insights. Contact us today!",
    alternates: {
        canonical: "https://www.elevatebs.com/accounting-services-in-adgm", // Specify the canonical URL for this page
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/bookkeeping.jpg";
    return (
        <>
        <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page ="Accounting & Bookkeeping Service in ADGM" backgroundImage={breadcrumbBackground}/>
        <BookkeepingabudhabiCnt/>
        {/* <Footer/> */}
        <FooterNew/>
        </div>
        </>
    )
}
export default page
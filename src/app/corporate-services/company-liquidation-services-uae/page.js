// import TopBar from '@/app/components/TopBar/TopBar';
import './liquidation.css';
// import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import CompanyLiquidation from './CompanyLiquidation';
// import Footer from '@/app/components/Footer/Footer';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Company Liquidation Services in Dubai, UAE | Auditor and Company Liquidator in Dubai",
  description: "Make company liquidation in the UAE hassle-free with our expert guidance. Elevate Business Services ensures a seamless process from start to finish.",
  keywords: "Liquidation Services in UAE,Company Liquidation Services in Dubai,Company Liquidator in Dubai UAE,company liquidation in dubai,company liquidation process in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/company-liquidation-services-uae", // Specify the canonical URL for this page
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Company Liquidation Service" backgroundImage={breadcrumbBackground}/>
    <CompanyLiquidation/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
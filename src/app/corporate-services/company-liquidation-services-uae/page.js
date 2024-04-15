import TopBar from '@/app/components/TopBar/TopBar';
import './liquidation.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import CompanyLiquidation from './CompanyLiquidation';
import Footer from '@/app/components/Footer/Footer';

export const metadata = {
  title: "Company Liquidation Services in Dubai, UAE | Auditor and Company Liquidator in Dubai",
  description: "Make company liquidation in the UAE hassle-free with our expert guidance. Elevate Business Services ensures a seamless process from start to finish.",
  keywords: "Liquidation Services in UAE,Company Liquidation Services in Dubai,Company Liquidator in Dubai UAE,company liquidation in dubai,company liquidation process in UAE"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Company Liquidation Service" />
    <CompanyLiquidation/>
    <Footer/>
    </>
  )
}

export default page
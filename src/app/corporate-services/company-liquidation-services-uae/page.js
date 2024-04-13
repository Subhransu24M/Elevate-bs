import TopBar from '@/app/components/TopBar/TopBar';
import './liquidation.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import CompanyLiquidation from './CompanyLiquidation';
import Footer from '@/app/components/Footer/Footer';

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

import TopBar from '@/app/components/TopBar/TopBar';
import './cfo.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import CfoContent from './CfoContent';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Outsourced CFO Services in Dubai | Elevate Business Solutions",
  description: "Looking for Outsourced CFO Services in Dubai? Elevate Business Services provides tailored financial solutions for businesses of all sizes. Learn more today.",
  keywords: "CFO Services in Dubai UAE,CFO Services in UAE,Virtual CFO services in Dubai,CFO In UAE"
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="CFO Services" backgroundImage={breadcrumbBackground}/>
    <CfoContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
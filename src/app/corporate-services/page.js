import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import CorporateContent from './CorporateContent';
import './corporate.css';

export const metadata = {
  title: "Corporate Services |  Elevate Business Solutions",
  description: "At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal.",
  keywords: "corporate services in uae"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Corporate Services" />
    <CorporateContent/>
    <Footer/>
    </>
  )
}

export default page
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import CorporateContent from './CorporateContent';
import './corporate.css';

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
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
import Footer from '../components/Footer/Footer';
import FooterNew from '../components/Footer/FooterNew';


import NavBar from '../components/NavBar/NavBar';
import NewNavbar from '../components/NavBar/NewNavbar';
import TopBar from '../components/TopBar/TopBar';
// import Zohoform from '../components/Zohoform/Zohoform';
import ContactContent from './ContactContent';
import './contact.css';

export const metadata = {
  title: "Contact us - Elevate Business Solutions",
  description: "Provide Innovative Support System to Any Business",
  keywords:"We have above 11 years of experience in providing IT and accounting services over the global."
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/contact.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Contact us" backgroundImage={breadcrumbBackground}/>
    <ContactContent/>
    <FooterNew/>
    {/* <div>
      <Zohoform/>
    </div> */}
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default page
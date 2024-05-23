import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
import Footer from '../components/Footer/Footer';
import PopupForm from '../components/FormPopup/popupForm';
import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import ContactContent from './ContactContent';
import './contact.css';

export const metadata = {
  title: "Contact us - Elevate Business Solutions",
  description: "Provide Innovative Support System to Any Business",
  keywords:"We have above 11 years of experience in providing IT and accounting services over the global."
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Contact us" />
    <ContactContent/>
    <div>
      <PopupForm/>
    </div>
    <Footer/>
    </>
  )
}

export default page
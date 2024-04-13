import TopBar from '@/app/components/TopBar/TopBar';
import './vatreg.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import VatRegistrationCnt from './VatRegistrationCnt';
import Footer from '@/app/components/Footer/Footer';

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="VAT Registration Service"/>
    <VatRegistrationCnt/>
    <Footer/>
    </>
  )
}

export default page
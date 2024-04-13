import TopBar from '@/app/components/TopBar/TopBar';
import './localpartner.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import LocalPartnerCnt from './LocalPartnerCnt';

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Local Partner Arrangement" />
    <LocalPartnerCnt/>
    <Footer/>
    </>
  )
}

export default page
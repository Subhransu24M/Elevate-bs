
import TopBar from '@/app/components/TopBar/TopBar';
import './cfo.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import CfoContent from './CfoContent';

export const metadata = {
  title: "Outsourced CFO Services in Dubai | Elevate Business Solutions",
  description: "Looking for Outsourced CFO Services in Dubai? Elevate Business Services provides tailored financial solutions for businesses of all sizes. Learn more today.",
  keywords: "CFO Services in Dubai UAE,CFO Services in UAE,Virtual CFO services in Dubai,CFO In UAE"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="CFO Services"/>
    <CfoContent/>
    <Footer/>
    </>
  )
}

export default page
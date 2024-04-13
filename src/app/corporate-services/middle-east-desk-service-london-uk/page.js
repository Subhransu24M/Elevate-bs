import TopBar from '@/app/components/TopBar/TopBar';
import './mdleast.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import MiddleEastDeskCnt from './MiddleEastDeskCnt';

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Middle East Desk Services"/>
    <MiddleEastDeskCnt/>
    <Footer/>
    </>
  )
}

export default page
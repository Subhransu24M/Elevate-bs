
import TopBar from '@/app/components/TopBar/TopBar';
import './cfo.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import CfoContent from './CfoContent';
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
import TopBar from '@/app/components/TopBar/TopBar';
import './mdleast.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import MiddleEastDeskCnt from './MiddleEastDeskCnt';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';
export const metadata = {
  title: "Middle East Desk services in UK, London | Elevate Business Solutions",
  description: "Enhance your global business reach with our Middle East Desk Service in London, UK. Elevate Business Services connects you to the heart of Middle Eastern opportunities.",
  keywords: "Middle east desk services in UK,Middle east desk services in London UK"
};
const page = () => {
  return (
    <>
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Middle East Desk Services"/>
    <MiddleEastDeskCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </>
  )
}

export default page
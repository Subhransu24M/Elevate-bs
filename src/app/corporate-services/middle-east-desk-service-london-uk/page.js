import TopBar from '@/app/components/TopBar/TopBar';
import './mdleast.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import MiddleEastDeskCnt from './MiddleEastDeskCnt';
export const metadata = {
  title: "Middle East Desk services in UK, London | Elevate Business Solutions",
  description: "Enhance your global business reach with our Middle East Desk Service in London, UK. Elevate Business Services connects you to the heart of Middle Eastern opportunities.",
  keywords: "Middle east desk services in UK,Middle east desk services in London UK"
};
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
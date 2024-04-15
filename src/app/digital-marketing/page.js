import './dm.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import DmContent from './DmContent';

export const metadata = {
  title: "Top Digital Marketing Agency in London, UK ",
  description: "Elevate your brand's digital presence with the premier digital marketing agency in London, UK. Harness the power of online strategies to engage and influence your target audience.",
  keywords:"Digital Marketing Agency in London UK,Digital Marketing Agency in London,top digital marketing agencies in London,Digital Marketing Company in London",
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Digital Marketing" />
    <DmContent/>
    <Footer/>
    </>
  )
}

export default page
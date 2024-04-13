import './dm.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import DmContent from './DmContent';
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
import './app.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import AppContent from './AppContent';
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="App Development" />
    <AppContent/>
    <Footer/>
    </>
  )
}

export default page
import './app.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import AppContent from './AppContent';

export const metadata = {
  title: "Top Mobile App Development Companies in UK ",
  description: "Experience innovation in Mobile App Development in the UK. Discover how leading developers in London are reshaping technology for your needs.",
  keywords:"Mobile App Development Company in UK, App Development Companies in London uk,App development agency in London,App Development Companies in London,Best Mobile App Developers in London,Best Mobile App Development Company in London",
};
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
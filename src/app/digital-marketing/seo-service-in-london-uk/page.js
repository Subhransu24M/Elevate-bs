import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import SeoCnt from './SeoCnt'
import './seo.css'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page='SEO Service'/>
    <SeoCnt/>
    <Footer/>
    </>
  )
}

export default page
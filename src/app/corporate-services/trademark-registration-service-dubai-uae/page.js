import TopBar from '@/app/components/TopBar/TopBar'
import './trademark.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import TrademarkContent from './TrademarkContent'
import Footer from '@/app/components/Footer/Footer'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Trademark Registration"/>
    <TrademarkContent/>
    <Footer/>
    </>
  )
}

export default page
import TopBar from '@/app/components/TopBar/TopBar'
import './iso.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import IsoCnt from './IsoCnt'
import Footer from '@/app/components/Footer/Footer'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page='ISO Certification'/>
    <IsoCnt/>
    <Footer/>
    </>
    

  )
}

export default page
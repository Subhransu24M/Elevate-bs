import TopBar from '@/app/components/TopBar/TopBar'
import './company.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import CompanyFormationCnt from './CompanyFormationCnt'
import Footer from '@/app/components/Footer/Footer'

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Company Formation" />
    <CompanyFormationCnt/>
    <Footer/>
    </>
  )
}

export default page
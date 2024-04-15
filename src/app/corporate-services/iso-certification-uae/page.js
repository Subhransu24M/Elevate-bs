import TopBar from '@/app/components/TopBar/TopBar'
import './iso.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import IsoCnt from './IsoCnt'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "ISO Certification in UAE | ISO consultants in Dubai",
  description: "Elevate Business Services offers ISO certification services in the UAE. Ensure compliance and quality excellence for your business with our expert ISO consultants.",
  keywords: "ISO Certification in UAE,ISO Consulting in UAE, ISO Consultants in UAE,ISO Certificate in UAE, ISO certification consultant in uae"
};
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
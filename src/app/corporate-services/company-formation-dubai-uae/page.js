import TopBar from '@/app/components/TopBar/TopBar'
import './company.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import CompanyFormationCnt from './CompanyFormationCnt'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "Company Formation in Dubai | usiness setup consultant in Dubai,UAE",
  description: "Seamless company formation in Dubai, UAE with Elevate Business Services. We handle the complexities, so you can focus on your business's success.",
  keywords: "Company Formation in Dubai,UAE Free Zone Company Setup,Mainland Company Setup,Offshore company setup in Dubai"
};
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
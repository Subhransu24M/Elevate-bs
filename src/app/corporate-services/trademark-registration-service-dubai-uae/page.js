import TopBar from '@/app/components/TopBar/TopBar'
import './trademark.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import TrademarkContent from './TrademarkContent'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "Trademark Registration Service in Dubai, UAE | Register Today",
  description: "Trademark Registration Service in Dubai, UAE - Elevate Business Solutions. Expertise, Efficiency, and Peace of Mind for Your Brand's Intellectual Property.",
  keywords: "Trademark Registration in the Dubai UAE,Trademark Registration in UAE,Trademark registration UAE cost,how to register trademark in UAE"
};
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
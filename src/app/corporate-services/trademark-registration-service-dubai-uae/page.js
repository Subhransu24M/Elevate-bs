import TopBar from '@/app/components/TopBar/TopBar'
import './trademark.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import TrademarkContent from './TrademarkContent'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Trademark Registration Service in Dubai, UAE | Register Today",
  description: "Trademark Registration Service in Dubai, UAE - Elevate Business Solutions. Expertise, Efficiency, and Peace of Mind for Your Brand's Intellectual Property.",
  keywords: "Trademark Registration in the Dubai UAE,Trademark Registration in UAE,Trademark registration UAE cost,how to register trademark in UAE"
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Trademark Registration" backgroundImage={breadcrumbBackground}/>
    <TrademarkContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
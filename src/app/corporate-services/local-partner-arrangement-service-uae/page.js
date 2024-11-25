import TopBar from '@/app/components/TopBar/TopBar';
import './localpartner.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import LocalPartnerCnt from './LocalPartnerCnt';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Find Local Sponsor in Dubai, UAE | Elevate Business Solutions",
  description: "Explore our UAE local partner arrangement service for a seamless market entry. Elevate Business Services connects you to trusted local partners in the UAE.",
  keywords: "Local service agent cost in Dubai,Local service agents in Dubai,Local service agent agreement"
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Local Partner Arrangement" backgroundImage={breadcrumbBackground}/>
    <LocalPartnerCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
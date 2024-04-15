import TopBar from '@/app/components/TopBar/TopBar';
import './localpartner.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import LocalPartnerCnt from './LocalPartnerCnt';

export const metadata = {
  title: "Find Local Sponsor in Dubai, UAE | Elevate Business Solutions",
  description: "Explore our UAE local partner arrangement service for a seamless market entry. Elevate Business Services connects you to trusted local partners in the UAE.",
  keywords: "Local service agent cost in Dubai,Local service agents in Dubai,Local service agent agreement"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Local Partner Arrangement" />
    <LocalPartnerCnt/>
    <Footer/>
    </>
  )
}

export default page
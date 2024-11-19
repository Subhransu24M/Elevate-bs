import TopBar from '@/app/components/TopBar/TopBar';
import './vatreg.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import VatRegistrationCnt from './VatRegistrationCnt';
import Footer from '@/app/components/Footer/Footer';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "VAT Registration Services in Dubai, UAE | Dubai VAT Consultants",
  description: "Simplify VAT registration in Dubai, UAE, with Elevate Business Services. Expert guidance for hassle-free compliance and tax management.",
  keywords: "uae vat registration online,vat registration process in uae,online vat registration uae,vat registration fee in uae,vat registration in uae for new companies,documents for vat registration in uae,vat registration services in Dubai UAE"
};
const page = () => {
  return (
    <>
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="VAT Registration Service"/>
    <VatRegistrationCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </>
  )
}

export default page
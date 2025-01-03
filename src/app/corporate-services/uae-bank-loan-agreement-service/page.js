
import TopBar from '@/app/components/TopBar/TopBar';
import './bankloan.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import { BankLoanCnt } from './BankLoanCnt';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';
export const metadata = {
  title: "Bank Loan Arrangement Services in Dubai, UAE",
  description: "Secure your Bank Loan Arrangement Services in Dubai, UAE. Elevate Business Services offers expert assistance in crafting and navigating loan agreements for businesses in the UAE.",
  keywords: "Bank Loan Arrangement Services in dubai,UAE Bank Loan Arrangement Services,Loan Brokers in Dubai UAE,Business loans in Dubai,Corporate Finance Services in Dubai,Commercial Broker in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/uae-bank-loan-agreement-service", // Specify the canonical URL for this page
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Bank Loan Agreement Service" backgroundImage={breadcrumbBackground}/>
    <BankLoanCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
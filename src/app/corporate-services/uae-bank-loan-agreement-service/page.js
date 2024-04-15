
import TopBar from '@/app/components/TopBar/TopBar';
import './bankloan.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import { BankLoanCnt } from './BankLoanCnt';
export const metadata = {
  title: "Bank Loan Arrangement Services in Dubai, UAE",
  description: "Secure your Bank Loan Arrangement Services in Dubai, UAE. Elevate Business Services offers expert assistance in crafting and navigating loan agreements for businesses in the UAE.",
  keywords: "Bank Loan Arrangement Services in dubai,UAE Bank Loan Arrangement Services,Loan Brokers in Dubai UAE,Business loans in Dubai,Corporate Finance Services in Dubai,Commercial Broker in Dubai"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Bank Loan Agreement Service"/>
    <BankLoanCnt/>
    <Footer/>
    </>
  )
}

export default page
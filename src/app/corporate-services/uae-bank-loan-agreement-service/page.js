
import TopBar from '@/app/components/TopBar/TopBar';
import './bankloan.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import { BankLoanCnt } from './BankLoanCnt';
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
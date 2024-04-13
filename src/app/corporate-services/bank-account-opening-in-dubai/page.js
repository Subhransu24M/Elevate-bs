import TopBar from '@/app/components/TopBar/TopBar';
import './bankaccountopening.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BankAccOpenContent from './BankAccOpenContent';
import Footer from '@/app/components/Footer/Footer';

const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Bank Account Opening" />
    <BankAccOpenContent/>
    <Footer/>
    </>
  )
}

export default page
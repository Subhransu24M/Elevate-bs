import TopBar from '@/app/components/TopBar/TopBar';
import './bankaccountopening.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BankAccOpenContent from './BankAccOpenContent';
import Footer from '@/app/components/Footer/Footer';

export const metadata = {
  title: "Open a Bank Account in the UAE | savings bank accounts in the UAE",
  description: "Discover hassle-free bank account opening services in Dubai with Elevate Business Services. Get expert assistance for your corporate banking needs in the UAE.",
  keywords: "Bank account opening assistance in dubai,UAE bank account opening services, corporate bank account opening in dubai(UAE Corporate Bank Account),corporate bank account open in uae"
};
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
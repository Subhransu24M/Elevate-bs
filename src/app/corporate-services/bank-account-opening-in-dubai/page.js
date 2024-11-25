import TopBar from '@/app/components/TopBar/TopBar';
import './bankaccountopening.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BankAccOpenContent from './BankAccOpenContent';
import Footer from '@/app/components/Footer/Footer';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Open a Bank Account in the UAE | savings bank accounts in the UAE",
  description: "Discover hassle-free bank account opening services in Dubai with Elevate Business Services. Get expert assistance for your corporate banking needs in the UAE.",
  keywords: "Bank account opening assistance in dubai,UAE bank account opening services, corporate bank account opening in dubai(UAE Corporate Bank Account),corporate bank account open in uae"
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Bank Account Opening" backgroundImage={breadcrumbBackground}/>
    <BankAccOpenContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
import TopBar from '@/app/components/TopBar/TopBar';
import './bookkeeping.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BookKeepingCnt from './BookKeepingCnt';
import Footer from '@/app/components/Footer/Footer';

export const metadata = {
  title: "Bookkeeping Services in Dubai, UAE | Bookkeeping firms in dubai",
  description: "Accurate and reliable bookkeeping for businesses in Du ai, UAE. Elevate your financial management with our expert bookkeeping services.",
  keywords: "Bookkeeping firms in dubai, Bookkeeping companies in dubai,Accounting & bookkeeping services in dubai,Bookkeeping services in dubai,Best Accounting and Bookkeeping Services in Dubai UAE,Bookkeeping service provider in Dubai UAE,outsourced bookkeeping services in Dubai UAE"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Bookkeeping Service" />
    <BookKeepingCnt/>
    <Footer/>
    </>
  )
}

export default page
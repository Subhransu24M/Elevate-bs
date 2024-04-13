import TopBar from '@/app/components/TopBar/TopBar';
import './bookkeeping.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BookKeepingCnt from './BookKeepingCnt';
import Footer from '@/app/components/Footer/Footer';

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
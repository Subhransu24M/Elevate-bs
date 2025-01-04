import TopBar from '@/app/components/TopBar/TopBar';
import './bookkeeping.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import BookKeepingCnt from './BookKeepingCnt';
import Footer from '@/app/components/Footer/Footer';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Bookkeeping Services in Dubai, UAE | Bookkeeping firms in dubai",
  description: "Accurate and reliable bookkeeping for businesses in Du ai, UAE. Elevate your financial management with our expert bookkeeping services.",
  keywords: "Bookkeeping firms in dubai, Bookkeeping companies in dubai,Accounting & bookkeeping services in dubai,Bookkeeping services in dubai,Best Accounting and Bookkeeping Services in Dubai UAE,Bookkeeping service provider in Dubai UAE,outsourced bookkeeping services in Dubai UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/bookkeeping-service-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Bookkeeping Services in Dubai, UAE | Bookkeeping firms in dubai',
    description: "Accurate and reliable bookkeeping for businesses in Du ai, UAE. Elevate your financial management with our expert bookkeeping services.",
    url: 'https://www.elevatebs.com/corporate-services/bookkeeping-service-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Bookkeeping Services in Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookkeeping Services in Dubai, UAE | Bookkeeping firms in dubai',
    description: "Accurate and reliable bookkeeping for businesses in Du ai, UAE. Elevate your financial management with our expert bookkeeping services.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
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
    <BreadCrumb page="Bookkeeping Service" backgroundImage={breadcrumbBackground}/>
    <BookKeepingCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
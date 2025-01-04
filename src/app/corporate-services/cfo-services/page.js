
// import TopBar from '@/app/components/TopBar/TopBar';
import './cfo.css';
// import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
// import Footer from '@/app/components/Footer/Footer';
import CfoContent from './CfoContent';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Outsourced CFO Services in Dubai | Elevate Business Solutions",
  description: "Looking for Outsourced CFO Services in Dubai? Elevate Business Services provides tailored financial solutions for businesses of all sizes. Learn more today.",
  keywords: "CFO Services in Dubai UAE,CFO Services in UAE,Virtual CFO services in Dubai,CFO In UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/cfo-services", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Outsourced CFO Services in Dubai | Elevate Business Solutions',
    description: "Looking for Outsourced CFO Services in Dubai? Elevate Business Services provides tailored financial solutions for businesses of all sizes. Learn more today.",
    url: 'https://www.elevatebs.com/corporate-services/cfo-services',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Outsourced CFO Services in Dubai',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outsourced CFO Services in Dubai | Elevate Business Solutions',
    description: "Looking for Outsourced CFO Services in Dubai? Elevate Business Services provides tailored financial solutions for businesses of all sizes. Learn more today.",
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
    <BreadCrumb page="CFO Services" backgroundImage={breadcrumbBackground}/>
    <CfoContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
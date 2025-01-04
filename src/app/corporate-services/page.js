import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
// import Footer from '../components/Footer/Footer';
import FooterNew from '../components/Footer/FooterNew';
// import NavBar from '../components/NavBar/NavBar';
import NewNavbar from '../components/NavBar/NewNavbar';
// import TopBar from '../components/TopBar/TopBar';
import CorporateContent from './CorporateContent';
import './corporate.css';

export const metadata = {
  title: "Corporate Services |  Elevate Business Solutions",
  description: "At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal.",
  keywords: "corporate services in uae",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Corporate Services |  Elevate Business Solutions',
    description: "At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal.",
    url: 'https://www.elevatebs.com/corporate-services',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Corporate Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Services |  Elevate Business Solutions',
    description: "At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal.",
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
    <BreadCrumb page="Corporate Services" backgroundImage={breadcrumbBackground}/>
    <CorporateContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
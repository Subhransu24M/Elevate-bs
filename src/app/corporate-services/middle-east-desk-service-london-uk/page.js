import TopBar from '@/app/components/TopBar/TopBar';
import './mdleast.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import MiddleEastDeskCnt from './MiddleEastDeskCnt';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';
export const metadata = {
  title: "Middle East Desk services in UK, London | Elevate Business Solutions",
  description: "Enhance your global business reach with our Middle East Desk Service in London, UK. Elevate Business Services connects you to the heart of Middle Eastern opportunities.",
  keywords: "Middle east desk services in UK,Middle east desk services in London UK",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/middle-east-desk-service-london-uk", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Middle East Desk services in UK, London | Elevate Business Solutions',
    description: "Enhance your global business reach with our Middle East Desk Service in London, UK. Elevate Business Services connects you to the heart of Middle Eastern opportunities.",
    url: 'https://www.elevatebs.com/corporate-services/middle-east-desk-service-london-uk',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Middle East Desk services in UK, London',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Middle East Desk services in UK, London | Elevate Business Solutions',
    description: "Enhance your global business reach with our Middle East Desk Service in London, UK. Elevate Business Services connects you to the heart of Middle Eastern opportunities.",
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
    <BreadCrumb page="Middle East Desk Services" backgroundImage={breadcrumbBackground}/>
    <MiddleEastDeskCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
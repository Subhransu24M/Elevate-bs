import TopBar from '@/app/components/TopBar/TopBar';
import './localpartner.css';
import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import Footer from '@/app/components/Footer/Footer';
import LocalPartnerCnt from './LocalPartnerCnt';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Find Local Sponsor in Dubai, UAE | Elevate Business Solutions",
  description: "Explore our UAE local partner arrangement service for a seamless market entry. Elevate Business Services connects you to trusted local partners in the UAE.",
  keywords: "Local service agent cost in Dubai,Local service agents in Dubai,Local service agent agreement",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/local-partner-arrangement-service-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Find Local Sponsor in Dubai, UAE | Elevate Business Solutions',
    description: "Explore our UAE local partner arrangement service for a seamless market entry. Elevate Business Services connects you to trusted local partners in the UAE.",
    url: 'https://www.elevatebs.com/corporate-services/local-partner-arrangement-service-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Find Local Sponsor in Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Local Sponsor in Dubai, UAE | Elevate Business Solutions',
    description: "Explore our UAE local partner arrangement service for a seamless market entry. Elevate Business Services connects you to trusted local partners in the UAE.",
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
    <BreadCrumb page="Local Partner Arrangement" backgroundImage={breadcrumbBackground}/>
    <LocalPartnerCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
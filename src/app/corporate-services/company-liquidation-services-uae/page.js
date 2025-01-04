// import TopBar from '@/app/components/TopBar/TopBar';
import './liquidation.css';
// import NavBar from '@/app/components/NavBar/NavBar';
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb';
import CompanyLiquidation from './CompanyLiquidation';
// import Footer from '@/app/components/Footer/Footer';
import NewNavbar from '@/app/components/NavBar/NewNavbar';
import FooterNew from '@/app/components/Footer/FooterNew';

export const metadata = {
  title: "Company Liquidation Services in Dubai, UAE | Auditor and Company Liquidator in Dubai",
  description: "Make company liquidation in the UAE hassle-free with our expert guidance. Elevate Business Services ensures a seamless process from start to finish.",
  keywords: "Liquidation Services in UAE,Company Liquidation Services in Dubai,Company Liquidator in Dubai UAE,company liquidation in dubai,company liquidation process in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/company-liquidation-services-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Company Liquidation Services in Dubai, UAE | Auditor and Company Liquidator in Dubai',
    description: "Make company liquidation in the UAE hassle-free with our expert guidance. Elevate Business Services ensures a seamless process from start to finish.",
    url: 'https://www.elevatebs.com/corporate-services/company-liquidation-services-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Company Liquidation Services in Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Liquidation Services in Dubai, UAE | Auditor and Company Liquidator in Dubai',
    description: "Make company liquidation in the UAE hassle-free with our expert guidance. Elevate Business Services ensures a seamless process from start to finish.",
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
    <BreadCrumb page="Company Liquidation Service" backgroundImage={breadcrumbBackground}/>
    <CompanyLiquidation/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
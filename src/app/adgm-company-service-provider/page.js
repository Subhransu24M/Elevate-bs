import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
// import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
// import NavBar from "../components/NavBar/NavBar";
import NewNavbar from "../components/NavBar/NewNavbar";
// import TopBar from "../components/TopBar/TopBar";
import AdgmContent from "./AdgmContent";

export const metadata = {
    title: "Company Service Provider For ADGM",
    description: "Company Service Provider for ADGM: Elevate offers streamlined setup, 100% foreign ownership, and expert compliance support in Abu Dhabi's financial hub. ",
    keywords: "adgm company service provider,Company Service Provider For ADGM",
    alternates: {
      canonical: "https://www.elevatebs.com/adgm-company-service-provider", // Specify the canonical URL for this page
    },
    openGraph: {
      title: 'Company Service Provider For ADGM',
      description: "Company Service Provider for ADGM: Elevate offers streamlined setup, 100% foreign ownership, and expert compliance support in Abu Dhabi's financial hub.",
      url: 'https://www.elevatebs.com/adgm-company-service-provider',
      siteName: 'Elevate Business Solutions DMCC',
      images: [
        {
          url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
          width: 600,
          height: 600,
          alt: 'Company Service Provider For ADGM',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Company Service Provider For ADGM',
      description: "Company Service Provider for ADGM: Elevate offers streamlined setup, 100% foreign ownership, and expert compliance support in Abu Dhabi's financial hub.",
      images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
    },
  };
  const page = () => {
    const breadcrumbBackground = "/images/breadcrump-bg/adgm.jpg";
    return (
      <>
      <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page="ADGM Company Services" backgroundImage={breadcrumbBackground} />
        <AdgmContent/>
        {/* <Footer/> */}
        <FooterNew/>
        </div>
  
      </>
    )
  }
  
  export default page
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import AdgmcompanySetup from "./AdgmcompanySetup";

export const metadata = {
  title: "ADGM Business Setup | Elevate Business Solutions DMCC ",
  description: "Setting up your company in the Abu Dhabi Global Market (ADGM) offers a world-class environment for businesses to grow, innovate, and expand. ",
  keywords: "adgm company setup,adgm company registration, adgm company formation,adgm business setup",
  alternates: {
    canonical: "https://www.elevatebs.com/adgm-company-setup", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'ADGM Business Setup | Elevate Business Solutions DMCC',
    description: "Setting up your company in the Abu Dhabi Global Market (ADGM) offers a world-class environment for businesses to grow, innovate, and expand.",
    url: 'https://www.elevatebs.com/adgm-company-setup',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'ADGM Business Setup',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADGM Business Setup | Elevate Business Solutions DMCC',
    description: "Setting up your company in the Abu Dhabi Global Market (ADGM) offers a world-class environment for businesses to grow, innovate, and expand.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/bookkeeping.jpg";
    return (
        <>
        <div className="fullwrapper">
          <NewNavbar/>
          <BreadCrumb page="ADGM Company Setup" backgroundImage={breadcrumbBackground}/>
          <AdgmcompanySetup/>
          <FooterNew/>
        </div>
        </>
    )
}
export default page
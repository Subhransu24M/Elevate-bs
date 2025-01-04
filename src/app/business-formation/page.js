import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import './business-formation.css';
import BusinessformationCnt from "./BusinessformationCnt";

export const metadata = {
    title: "Business Formation Services UAE",
    description: "Elevate offers complete services to facilitate your business setup in Dubai. From helping you choose the right business. ",
    alternates: {
        canonical: "https://www.elevatebs.com/business-formation", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'Business Formation Services UAE',
        description: "Elevate offers complete services to facilitate your business setup in Dubai. From helping you choose the right business.",
        url: 'https://www.elevatebs.com/business-formation',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'Business Formation Services UAE',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Business Formation Services UAE',
        description: "Elevate offers complete services to facilitate your business setup in Dubai. From helping you choose the right business.",
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () => {
    const breadcrumbBackground = "/images/breadcrump-bg/corporate.jpg";
    return (
        <>
        <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page="Business Formation" backgroundImage={breadcrumbBackground}/>
            <BusinessformationCnt/>
            <FooterNew/>
        </div>
        </>
    )
}
export default page
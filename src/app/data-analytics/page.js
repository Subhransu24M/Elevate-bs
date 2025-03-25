import FooterNew from "../components/Footer/FooterNew";
import DaContent from "./DaContent";


const { default: BreadCrumb } = require("../components/BreadCrumbs/BreadCrumb")
const { default: NewNavbar } = require("../components/NavBar/NewNavbar")

export const metadata = {
    title: "Data Analytics - Turn Your Data into Business Growth ",
    description: "Our Data Analytics Services allow businesses to transform raw data into strategic, actionable decisions. ",
    keywords:"data analytics service",
    alternates: {
      canonical: "https://www.elevatebs.com/data-analytics", // Specify the canonical URL for this page
    },
    openGraph: {
      title: 'Data Analytics - Turn Your Data into Business Growth',
      description: "Our Data Analytics Services allow businesses to transform raw data into strategic, actionable decisions.",
      url: 'https://www.elevatebs.com/data-analytics',
      siteName: 'Elevate Business Solutions DMCC',
      images: [
        {
          url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
          width: 600,
          height: 600,
          alt: 'data analytics service',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Data Analytics - Turn Your Data into Business Growth',
      description: "Our Data Analytics Services allow businesses to transform raw data into strategic, actionable decisions.",
      images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
    },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/data-analytics-hdr-bg.jpg";
    return(
        <>
        <NewNavbar/>
        <BreadCrumb page="Data Analytics" backgroundImage={breadcrumbBackground} />
        <DaContent/>
        <FooterNew/>
        </>
    )
}

export default page
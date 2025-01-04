import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import JafzaCnt from "./JafzaCnt";
import './jafza-offshore.css';
export const metadata = {
    title: "JAFZA Offshore Company Formation Dubai | Cost, Process & Benefits",
    description: "Simplify your JAFZA offshore company formation in Dubai. Discover competitive costs, tax benefits, asset protection, and efficient processes. Start your global journey today!",
    alternates: {
        canonical: "https://www.elevatebs.com/jafza-offshore-company-formation-dubai", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'JAFZA Offshore Company Formation Dubai | Cost, Process & Benefits',
        description: "Simplify your JAFZA offshore company formation in Dubai. Discover competitive costs, tax benefits, asset protection, and efficient processes. Start your global journey today!",
        url: 'https://www.elevatebs.com/jafza-offshore-company-formation-dubai',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'JAFZA Offshore Company Formation Dubai',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'JAFZA Offshore Company Formation Dubai | Cost, Process & Benefits',
        description: "Simplify your JAFZA offshore company formation in Dubai. Discover competitive costs, tax benefits, asset protection, and efficient processes. Start your global journey today!",
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/about-dubai.jpg";
    return(
        <>
        <NewNavbar/>
        <BreadCrumb page="JAFZA Offshore Company Formation" backgroundImage={breadcrumbBackground}/>
        <JafzaCnt/>
        <FooterNew/>
        </>
    )
}
export default page
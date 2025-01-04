import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import AdgmServices from "./AdgmServices";
import './adgm.css';

export const metadata = {
    title: "ADGM Corporate Services,UAE",
    description: "Elevate is one of the best Approved Auditors in ADGM, renowned for providing reliable services for over a decade.",
    alternates: {
        canonical: "https://www.elevatebs.com/adgm", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'ADGM Corporate Services,UAE',
        description: 'Elevate is one of the best Approved Auditors in ADGM, renowned for providing reliable services for over a decade.',
        url: 'https://www.elevatebs.com/adgm',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'ADGM Corporate Services,UAE',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'ADGM Corporate Services,UAE',
        description: 'Elevate is one of the best Approved Auditors in ADGM, renowned for providing reliable services for over a decade.',
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/adgm.jpg";
    return(
        <>
         <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page ="ADGM Services" backgroundImage={breadcrumbBackground}/>
            <AdgmServices/>
            <FooterNew/>
         </div>
        </>
    )
}
export default page
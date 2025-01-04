import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import AuditAssurancecnt from "./AuditAssuranceCnt"
import './auditassurance.css';
import NewNavbar from "@/app/components/NavBar/NewNavbar"
import FooterNew from "@/app/components/Footer/FooterNew"


export const metadata = {
  title: "Auditing Services in UAE |Approved  Auditors in UAE",
  description: "Reliable Auditing Services in UAE await you at Elevate Business Services.Elevate Business Services' audit and assurance expertise is at your disposal",
  keywords: "Auditing Firms in UAE,Audit Services in UAE, Audit and Assurance Services in UAE, Auditors in UAE, Audit Firm in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/audit-assurance-services-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Auditing Services in UAE |Approved  Auditors in UAE',
    description: "Reliable Auditing Services in UAE await you at Elevate Business Services.Elevate Business Services' audit and assurance expertise is at your disposal.",
    url: 'https://www.elevatebs.com/corporate-services/audit-assurance-services-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Auditing Services in UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auditing Services in UAE |Approved  Auditors in UAE',
    description: "Reliable Auditing Services in UAE await you at Elevate Business Services.Elevate Business Services' audit and assurance expertise is at your disposal.",
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
    <BreadCrumb page='Audit & Assurance Service' backgroundImage={breadcrumbBackground}/>
    <AuditAssurancecnt/>
    <FooterNew/>
    {/* <Footer/> */}
    </div>

    </>
  )
}

export default page
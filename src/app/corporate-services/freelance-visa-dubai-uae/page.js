import BreadCrumb from "@/app/components/BreadCrumbs/BreadCrumb"
import Footer from "@/app/components/Footer/Footer"
import NavBar from "@/app/components/NavBar/NavBar"
import TopBar from "@/app/components/TopBar/TopBar"
import FreelancevisaCnt from "./FreelancevisaCnt"
import NewNavbar from "@/app/components/NavBar/NewNavbar"
import FooterNew from "@/app/components/Footer/FooterNew"

export const metadata = {
  title: "Freelance Visa Dubai, UAE | Elevate Business Solutions",
  description: "Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle.",
  keywords: "freelance visa dubai,freelance visa uae",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/freelance-visa-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Freelance Visa Dubai, UAE | Elevate Business Solutions',
    description: "Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle.",
    url: 'https://www.elevatebs.com/corporate-services/freelance-visa-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Freelance Visa Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Visa Dubai, UAE | Elevate Business Solutions',
    description: "Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle.",
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
    <BreadCrumb page="Freelance Visa Dubai" backgroundImage={breadcrumbBackground}/>
    <FreelancevisaCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
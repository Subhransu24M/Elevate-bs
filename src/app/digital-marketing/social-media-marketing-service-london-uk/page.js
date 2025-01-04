import NewNavbar from "@/app/components/NavBar/NewNavbar"
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb"
// import Footer from "../../components/Footer/Footer"
// import NavBar from "../../components/NavBar/NavBar"
// import TopBar from "../../components/TopBar/TopBar"
import SocialMediaCnt from "./SocialMediaCnt"
import './socialmedia.css'
import FooterNew from "@/app/components/Footer/FooterNew"

export const metadata = {
  title: "Social Media Marketing Agency in London, UK | Elevate Business Solutions ",
  description: "Being one of the Top Social Media Marketing Agency in London, UK, we knows how to captivate audiences. Reach, engage, and grow your brand today.",
  keywords: "Social Media Marketing Agency in London",
  alternates: {
    canonical: "https://www.elevatebs.com/digital-marketing/social-media-marketing-service-london-uk", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Social Media Marketing Agency in London, UK | Elevate Business Solutions',
    description: "Being one of the Top Social Media Marketing Agency in London, UK, we knows how to captivate audiences. Reach, engage, and grow your brand today.",
    url: 'https://www.elevatebs.com/digital-marketing/social-media-marketing-service-london-uk',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Social Media Marketing Agency in London',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in London, UK | Elevate Business Solutions',
    description: "Being one of the Top Social Media Marketing Agency in London, UK, we knows how to captivate audiences. Reach, engage, and grow your brand today.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/social-media-marketing.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="SMO/SMM Service" backgroundImage={breadcrumbBackground}/>
    <SocialMediaCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import FooterNew from "../components/Footer/FooterNew";
import NavBar from "../components/NavBar/NavBar"
import NewNavbar from "../components/NavBar/NewNavbar";
import TopBar from "../components/TopBar/TopBar"
import WebDevelopContent from "./WebDevelopContent";

export const metadata = {
    title: "Website Design and Development Company in London, UK ",
    description: "Unleash your full potential with bespoke web design and development services in London, UK.",
    keywords:"Website design and development company in London,Web Design and Development Agency London UK,Web Design And Development Service Provider In London,Web Design Agency In London,London Web Development Agency,Web Development Company in London,Web Design Company in London",
    alternates: {
      canonical: "https://www.elevatebs.com/website-development", // Specify the canonical URL for this page
    },
    openGraph: {
      title: 'Website Design and Development Company in London, UK',
      description: "Unleash your full potential with bespoke web design and development services in London, UK.",
      url: 'https://www.elevatebs.com/website-development',
      siteName: 'Elevate Business Solutions DMCC',
      images: [
        {
          url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
          width: 600,
          height: 600,
          alt: 'Website Design and Development Company in London, UK',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Website Design and Development Company in London, UK',
      description: "Unleash your full potential with bespoke web design and development services in London, UK.",
      images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
    },
  };
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/web-development.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Website Development" backgroundImage={breadcrumbBackground}/>
    <WebDevelopContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
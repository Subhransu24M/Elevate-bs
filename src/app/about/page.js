import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
// import Footer from "../components/Footer/Footer"
import FooterNew from "../components/Footer/FooterNew"
// import NavBar from "../components/NavBar/NavBar"
import NewNavbar from "../components/NavBar/NewNavbar"
// import TopBar from "../components/TopBar/TopBar"
import AboutContent from "./AboutContent"


export const metadata = {
  title: "About - Elevate Business Solutions DMCC",
  description: "Capitalizing on its 15 years of cutting edge expertise in Corporate Services, IT Services & Digital Marketing.We have experienced team members giving their hands in enabling the business grow.",
  alternates: {
    canonical: "https://www.elevatebs.com/about", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'About - Elevate Business Solutions DMCC',
    description: 'Capitalizing on its 15 years of cutting edge expertise in Corporate Services, IT Services & Digital Marketing.We have experienced team members giving their hands in enabling the business grow.',
    url: 'https://www.elevatebs.com/about',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Provide Innovative Support System to Any Business',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Elevate Business Solutions DMCC',
    description: 'Capitalizing on its 15 years of cutting edge expertise in Corporate Services, IT Services & Digital Marketing.We have experienced team members giving their hands in enabling the business grow.',
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/about-dubai.jpg";
  return (
    <>
    <div className="fullwrapper">
      {/* <TopBar />
      <NavBar /> */}
      <NewNavbar/>
      <BreadCrumb page="About Us" backgroundImage={breadcrumbBackground} />
      <AboutContent/>
      {/* <Footer /> */}
      <FooterNew/>
      </div>
    </>
  )
}

export default page
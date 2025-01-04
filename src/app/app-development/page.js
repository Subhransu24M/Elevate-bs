import './app.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import AppContent from './AppContent';
import NewNavbar from '../components/NavBar/NewNavbar';
import FooterNew from '../components/Footer/FooterNew';

export const metadata = {
  title: "Top Mobile App Development Companies in UK ",
  description: "Experience innovation in Mobile App Development in the UK. Discover how leading developers in London are reshaping technology for your needs.",
  keywords:"Mobile App Development Company in UK, App Development Companies in London uk,App development agency in London,App Development Companies in London,Best Mobile App Developers in London,Best Mobile App Development Company in London",
  alternates: {
    canonical: "https://www.elevatebs.com/app-development", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Top Mobile App Development Companies in UK',
    description: "Experience innovation in Mobile App Development in the UK. Discover how leading developers in London are reshaping technology for your needs.",
    url: 'https://www.elevatebs.com/app-development',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Top Mobile App Development Companies in UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Mobile App Development Companies in UK',
    description: "Experience innovation in Mobile App Development in the UK. Discover how leading developers in London are reshaping technology for your needs.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/app-development.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="App Development" backgroundImage={breadcrumbBackground}/>
    <AppContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
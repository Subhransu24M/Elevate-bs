import './dm.css';
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import DmContent from './DmContent';
import NewNavbar from '../components/NavBar/NewNavbar';
import FooterNew from '../components/Footer/FooterNew';

export const metadata = {
  title: "Top Digital Marketing Agency in London, UK ",
  description: "Elevate your brand's digital presence with the premier digital marketing agency in London, UK. Harness the power of online strategies to engage and influence your target audience.",
  keywords:"Digital Marketing Agency in London UK,Digital Marketing Agency in London,top digital marketing agencies in London,Digital Marketing Company in London",
  alternates: {
    canonical: "https://www.elevatebs.com/digital-marketing", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Top Digital Marketing Agency in London, UK',
    description: "Elevate your brand's digital presence with the premier digital marketing agency in London, UK. Harness the power of online strategies to engage and influence your target audience.",
    url: 'https://www.elevatebs.com/digital-marketing',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Top Digital Marketing Agency in London, UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Digital Marketing Agency in London, UK',
    description: "Elevate your brand's digital presence with the premier digital marketing agency in London, UK. Harness the power of online strategies to engage and influence your target audience.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/digital-marketing.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Digital Marketing" backgroundImage={breadcrumbBackground}/>
    <DmContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
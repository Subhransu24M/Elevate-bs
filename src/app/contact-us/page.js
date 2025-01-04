import BreadCrumb from '../components/BreadCrumbs/BreadCrumb';
// import Footer from '../components/Footer/Footer';
import FooterNew from '../components/Footer/FooterNew';


// import NavBar from '../components/NavBar/NavBar';
import NewNavbar from '../components/NavBar/NewNavbar';
// import TopBar from '../components/TopBar/TopBar';
// import Zohoform from '../components/Zohoform/Zohoform';
import ContactContent from './ContactContent';
import './contact.css';

export const metadata = {
  title: "Contact us - Elevate Business Solutions",
  description: "Contact us to provide an innovative support system to any business. Let our experts help you achieve your goals with tailored solutions designed to drive growth and success.",
  keywords:"We have above 11 years of experience in providing IT and accounting services over the global.",
  alternates: {
    canonical: "https://www.elevatebs.com/contact-us", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Contact us - Elevate Business Solutions',
    description: "Contact us to provide an innovative support system to any business. Let our experts help you achieve your goals with tailored solutions designed to drive growth and success.",
    url: 'https://www.elevatebs.com/contact-us',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Contact us to provide an innovative support system to any business',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact us - Elevate Business Solutions',
    description: "Contact us to provide an innovative support system to any business. Let our experts help you achieve your goals with tailored solutions designed to drive growth and success.",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/contact.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Contact us" backgroundImage={breadcrumbBackground}/>
    <ContactContent/>
    <FooterNew/>
    {/* <div>
      <Zohoform/>
    </div> */}
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default page
import TopBar from '@/app/components/TopBar/TopBar'
import './trademark.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import TrademarkContent from './TrademarkContent'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Trademark Registration Service in Dubai, UAE | Register Today",
  description: "Trademark Registration Service in Dubai, UAE - Elevate Business Solutions. Expertise, Efficiency, and Peace of Mind for Your Brand's Intellectual Property.",
  keywords: "Trademark Registration in the Dubai UAE,Trademark Registration in UAE,Trademark registration UAE cost,how to register trademark in UAE",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/trademark-registration-service-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Trademark Registration Service in Dubai, UAE | Register Today',
    description: "Trademark Registration Service in Dubai, UAE - Elevate Business Solutions. Expertise, Efficiency, and Peace of Mind for Your Brand's Intellectual Property.",
    url: 'https://www.elevatebs.com/corporate-services/trademark-registration-service-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Trademark Registration Service in Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration Service in Dubai, UAE | Register Today',
    description: "Trademark Registration Service in Dubai, UAE - Elevate Business Solutions. Expertise, Efficiency, and Peace of Mind for Your Brand's Intellectual Property.",
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
    <BreadCrumb page="Trademark Registration" backgroundImage={breadcrumbBackground}/>
    <TrademarkContent/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
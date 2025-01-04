
import TopBar from '@/app/components/TopBar/TopBar'
import './restaurant.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import RestaurantContent from './RestaurantContent'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "Restaurant Accounting Services Dubai | Elevate Business Solutions",
  description: "Discover professional restaurant accounting and bookkeeping services in Dubai, UAE. Optimize your financial strategy with our expert assistance.",
  keywords: "Accounting Services for Restaurants in UAE,Accounting & bookkeeping services for restaurant,Restaurant Accounting Services in Dubai,Accounting Services for Restaurants in Dubai UAE,Accounting and Bookkeeping Services in Dubai UAE,Restaurant audit companies in Dubai",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/restaurant-accounting-bookkeeping-service-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'Restaurant Accounting Services Dubai | Elevate Business Solutions',
    description: "Discover professional restaurant accounting and bookkeeping services in Dubai, UAE. Optimize your financial strategy with our expert assistance.",
    url: 'https://www.elevatebs.com/corporate-services/restaurant-accounting-bookkeeping-service-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'Restaurant Accounting Services Dubai',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Accounting Services Dubai | Elevate Business Solutions',
    description: "Discover professional restaurant accounting and bookkeeping services in Dubai, UAE. Optimize your financial strategy with our expert assistance.",
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
   <BreadCrumb page="Restaurant Accounting" backgroundImage={breadcrumbBackground}/>
   <RestaurantContent/>
   {/* <Footer/> */}
   <FooterNew/>
   </div>
   </>
  )
}

export default page
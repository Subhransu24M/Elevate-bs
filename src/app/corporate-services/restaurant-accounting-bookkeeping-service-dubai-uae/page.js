
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
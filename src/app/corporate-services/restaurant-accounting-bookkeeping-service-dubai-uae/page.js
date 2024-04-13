
import TopBar from '@/app/components/TopBar/TopBar'
import './restaurant.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import RestaurantContent from './RestaurantContent'
import Footer from '@/app/components/Footer/Footer'
const page = () => {
  return (
   <>
   <TopBar/>
   <NavBar/>
   <BreadCrumb page="Restaurant Accounting"/>
   <RestaurantContent/>
   <Footer/>
   </>
  )
}

export default page
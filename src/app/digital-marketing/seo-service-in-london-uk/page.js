import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import SeoCnt from './SeoCnt'
import './seo.css'

export const metadata = {
  title: "SEO Agency in London, UK | Elevate Business Solutions ",
  description: "Top SEO Agency in London, UK. Achieve Top Rankings, Dominate Search, Sustain Position for Key Keywords. Elevate Your Online Visibility!",
  keywords: "SEO Agency in London"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page='SEO Service'/>
    <SeoCnt/>
    <Footer/>
    </>
  )
}

export default page
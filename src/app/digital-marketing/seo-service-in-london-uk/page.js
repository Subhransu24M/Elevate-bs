import NewNavbar from '@/app/components/NavBar/NewNavbar'
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
// import Footer from '../../components/Footer/Footer'
// import NavBar from '../../components/NavBar/NavBar'
// import TopBar from '../../components/TopBar/TopBar'
import SeoCnt from './SeoCnt'
import './seo.css'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "SEO Agency in London, UK | Elevate Business Solutions ",
  description: "Top SEO Agency in London, UK. Achieve Top Rankings, Dominate Search, Sustain Position for Key Keywords. Elevate Your Online Visibility!",
  keywords: "SEO Agency in London",
  alternates: {
    canonical: "https://www.elevatebs.com/digital-marketing/seo-service-in-london-uk", // Specify the canonical URL for this page
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/seo.jpg";
  return (
    <>
    <div className='fullwrapper'>
    <NewNavbar/>
    {/* <TopBar/>
    <NavBar/> */}
    <BreadCrumb page='SEO Service' backgroundImage={breadcrumbBackground}/>
    <SeoCnt/>
    <FooterNew/>
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default page
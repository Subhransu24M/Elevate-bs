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
  openGraph: {
    title: 'SEO Agency in London, UK | Elevate Business Solutions',
    description: "Top SEO Agency in London, UK. Achieve Top Rankings, Dominate Search, Sustain Position for Key Keywords. Elevate Your Online Visibility!",
    url: 'https://www.elevatebs.com/digital-marketing/seo-service-in-london-uk',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'SEO Agency in London, UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in London, UK | Elevate Business Solutions',
    description: "Top SEO Agency in London, UK. Achieve Top Rankings, Dominate Search, Sustain Position for Key Keywords. Elevate Your Online Visibility!",
    images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
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
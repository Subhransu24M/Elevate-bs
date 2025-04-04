import TopBar from '@/app/components/TopBar/TopBar'
import './vatdereg.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VatDeRegCnt from './VatDeRegCnt'
import Footer from '@/app/components/Footer/Footer'
import NewNavbar from '@/app/components/NavBar/NewNavbar'
import FooterNew from '@/app/components/Footer/FooterNew'

export const metadata = {
  title: "VAT deregistration Services in Dubai, UAE | Dubai VAT Consultants",
  description: "Need VAT deregistration in Dubai? Elevate Business Services offers seamless solutions to help your business exit the VAT regime efficiently.",
  keywords: "Deregistration of vat in uae, VAT Deregistration Services in Dubai UAE,VAT Deregistration Services in UAE,uae vat deregistration,vat deregistration guide,Documents required for vat deregistration in uae",
  alternates: {
    canonical: "https://www.elevatebs.com/corporate-services/vat-deregistration-service-dubai-uae", // Specify the canonical URL for this page
  },
  openGraph: {
    title: 'VAT deregistration Services in Dubai, UAE | Dubai VAT Consultants',
    description: "Need VAT deregistration in Dubai? Elevate Business Services offers seamless solutions to help your business exit the VAT regime efficiently.",
    url: 'https://www.elevatebs.com/corporate-services/vat-deregistration-service-dubai-uae',
    siteName: 'Elevate Business Solutions DMCC',
    images: [
      {
        url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
        width: 600,
        height: 600,
        alt: 'VAT deregistration Services in Dubai, UAE',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAT deregistration Services in Dubai, UAE | Dubai VAT Consultants',
    description: "Need VAT deregistration in Dubai? Elevate Business Services offers seamless solutions to help your business exit the VAT regime efficiently.",
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
    <BreadCrumb page="VAT De-Registration" backgroundImage={breadcrumbBackground}/>
    <VatDeRegCnt/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
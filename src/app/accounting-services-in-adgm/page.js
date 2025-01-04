import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";
import BookkeepingabudhabiCnt from "./BookkeepingabudhabiCnt";

export const metadata = {
    title: "Accounting & bookkeeping services in ADGM,UAE",
    description: "Expert accounting & bookkeeping services in ADGM by Elevate. Streamline compliance, boost growth & gain strategic insights. Contact us today!",
    alternates: {
        canonical: "https://www.elevatebs.com/accounting-services-in-adgm", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'Accounting & bookkeeping services in ADGM,UAE',
        description: 'Expert accounting & bookkeeping services in ADGM by Elevate. Streamline compliance, boost growth & gain strategic insights. Contact us today!',
        url: 'https://www.elevatebs.com/accounting-services-in-adgm',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'Accounting & bookkeeping services in ADGM,UAE',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Accounting & bookkeeping services in ADGM,UAE',
        description: 'Expert accounting & bookkeeping services in ADGM by Elevate. Streamline compliance, boost growth & gain strategic insights. Contact us today!',
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/bookkeeping.jpg";
    return (
        <>
        <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page ="Accounting & Bookkeeping Service in ADGM" backgroundImage={breadcrumbBackground}/>
        <BookkeepingabudhabiCnt/>
        {/* <Footer/> */}
        <FooterNew/>
        </div>
        </>
    )
}
export default page
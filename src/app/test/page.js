import BreadCrumb from "../components/BreadCrumbs/BreadCrumb";
import FooterNew from "../components/Footer/FooterNew";
import NewNavbar from "../components/NavBar/NewNavbar";

export const metadata = {
    title: "test",
    description: "test",
    alternates: {
        canonical: "https://www.elevatebs.com/test", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'Accounting & bookkeeping services in ADGM,UAE',
        description: 'Expert accounting & bookkeeping services in ADGM by Elevate. Streamline compliance, boost growth & gain strategic insights. Contact us today!',
        url: 'https://www.elevatebs.com/test',
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
        title: 'test',
        description: 'test',
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/testimg.jpg";
    return (
        <>
        <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page ="test" backgroundImage={breadcrumbBackground}/>
        <h1>this is a test page</h1>
        {/* <Footer/> */}
        <FooterNew/>
        </div>
        </>
    )
}
export default page
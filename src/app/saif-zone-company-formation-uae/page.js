import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import SaifzoneCnt from "./SaifzoneCnt";

export const metadata = {
    title: "SAIF Zone Company Formation | Business Setup in Sharjah Free Zone ",
    description: "Explore SAIF Zone company formation with cost-effective packages, quick licenses, and expert support. Start your business setup in Sharjah Free Zone today! ",
    keywords: "SAIF Zone Company Formation,Company Formation in Saif Zone,SAIF Zone Business Setup Cost,Business Setup in Sharjah Airport Free Zone,Company Formation in Sharjah Free Zone,company formations in  UAE,company registration in saif zone",
    alternates: {
        canonical: "https://www.elevatebs.com/saif-zone-company-formation-uae", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'SAIF Zone Company Formation | Business Setup in Sharjah Free Zone',
        description: "Explore SAIF Zone company formation with cost-effective packages, quick licenses, and expert support. Start your business setup in Sharjah Free Zone today!",
        url: 'https://www.elevatebs.com/saif-zone-company-formation-uae',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'SAIF Zone Company Formation',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'SAIF Zone Company Formation | Business Setup in Sharjah Free Zone',
        description: "Explore SAIF Zone company formation with cost-effective packages, quick licenses, and expert support. Start your business setup in Sharjah Free Zone today!",
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () =>{
    const breadcrumbBackground = "/images/breadcrump-bg/saif-zone.jpg";
    return(
        <>
        <div className="fullwrapper">
            <NewNavbar/>
            <BreadCrumb page="SAIF Zone Company Formation" backgroundImage={breadcrumbBackground}/>
            <SaifzoneCnt/>
            <FooterNew/>
        </div>
        </>
    )
}
export default page
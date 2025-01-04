import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import FooterNew from "../components/Footer/FooterNew";
// import NavBar from "../components/NavBar/NavBar"
import NewNavbar from "../components/NavBar/NewNavbar";
// import TopBar from "../components/TopBar/TopBar"
// import AjmanDocuments from "./AjmanDocuments";
import AjmanfreezoneCnt from "./AjmanfreezoneCnt";


export const metadata = {
    title: "Company Formation in Ajman Free Zone | Elevate Business Solutions ",
    description: "Start your business with company formation in Ajman Free Zone. Enjoy 100% foreign ownership, low setup costs, and hassle-free licensing. ",
    keywords: "Ajman Free Zone Company Formation,Company Formation in Ajman Free Zone,Company Setup in Ajman Free Zone UAE,Business Setup in Ajman Free Zone,Ajman Free Zone Business Setup,ajman free zone company setup cost",
    alternates: {
        canonical: "https://www.elevatebs.com/ajman-free-zone-company-formation-uae", // Specify the canonical URL for this page
      },
      openGraph: {
        title: 'Company Formation in Ajman Free Zone | Elevate Business Solutions',
        description: "Start your business with company formation in Ajman Free Zone. Enjoy 100% foreign ownership, low setup costs, and hassle-free licensing.",
        url: 'https://www.elevatebs.com/ajman-free-zone-company-formation-uae',
        siteName: 'Elevate Business Solutions DMCC',
        images: [
          {
            url: 'https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg',
            width: 600,
            height: 600,
            alt: 'Company Formation in Ajman Free Zone',
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Company Formation in Ajman Free Zone | Elevate Business Solutions DMCC',
        description: "Start your business with company formation in Ajman Free Zone. Enjoy 100% foreign ownership, low setup costs, and hassle-free licensing.",
        images: ['https://www.elevatebs.com/_next/static/media/ebs-logo-svg.32be402c.svg'],
      },
  };

const page = () => {
    const breadcrumbBackground = "/images/breadcrump-bg/ajman.jpg";
    return(
        <>
        <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page="AJMAN Freezone Company Formation" backgroundImage={breadcrumbBackground} />
        <AjmanfreezoneCnt/>
        <Footer/>
        <FooterNew/>
        </div>
        </>
    )
}

export default page
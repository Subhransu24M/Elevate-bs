import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
// import AjmanDocuments from "./AjmanDocuments";
import AjmanfreezoneCnt from "./AjmanfreezoneCnt";


export const metadata = {
    title: "Company Formation in Ajman Free Zone | Elevate Business Solutions ",
    description: "Start your business with company formation in Ajman Free Zone. Enjoy 100% foreign ownership, low setup costs, and hassle-free licensing. ",
    keywords: "Ajman Free Zone Company Formation,Company Formation in Ajman Free Zone,Company Setup in Ajman Free Zone UAE,Business Setup in Ajman Free Zone,Ajman Free Zone Business Setup,ajman free zone company setup cost",
  };

const page = () => {
    return(
        <>
        <TopBar/>
        <NavBar/>
        <BreadCrumb page="AJMAN Freezone Company Formation" />
        <AjmanfreezoneCnt/>
        <Footer/>
        </>
    )
}

export default page
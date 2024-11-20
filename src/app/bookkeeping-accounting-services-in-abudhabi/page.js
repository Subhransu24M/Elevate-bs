import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import FooterNew from "../components/Footer/FooterNew"
import NavBar from "../components/NavBar/NavBar"
import NewNavbar from "../components/NavBar/NewNavbar"
import TopBar from "../components/TopBar/TopBar"
import BookkeepingabudhabiCnt from "./BookkeepingabudhabiCnt"

const page = () =>{
    return (
        <>
        <div className="fullwrapper">
        {/* <TopBar/>
        <NavBar/> */}
        <NewNavbar/>
        <BreadCrumb page ="Bookkeeping & Accounting Service in Abu Dhabi"/>
        <BookkeepingabudhabiCnt/>
        {/* <Footer/> */}
        <FooterNew/>
        </div>
        </>
    )
}
export default page
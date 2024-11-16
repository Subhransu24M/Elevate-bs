import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
import BookkeepingabudhabiCnt from "./BookkeepingabudhabiCnt"

const page = () =>{
    return (
        <>
        <TopBar/>
        <NavBar/>
        <BreadCrumb page ="Bookkeeping & Accounting Service in Abu Dhabi"/>
        <BookkeepingabudhabiCnt/>
        <Footer/>
        </>
    )
}
export default page
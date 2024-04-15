import BreadCrumb from "../components/BreadCrumbs/BreadCrumb"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import TopBar from "../components/TopBar/TopBar"
import WebDevelopContent from "./WebDevelopContent";

export const metadata = {
    title: "Website Design and Development Company in London, UK ",
    description: "Unleash your full potential with bespoke web design and development services in London, UK.",
    keywords:"Website design and development company in London,Web Design and Development Agency London UK,Web Design And Development Service Provider In London,Web Design Agency In London,London Web Development Agency,Web Development Company in London,Web Design Company in London",
  };
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="Website Development"/>
    <WebDevelopContent/>
    <Footer/>
    </>
  )
}

export default page
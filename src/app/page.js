// import Image from "next/image";
// import styles from "./page.module.css";
// import TopBar from "./components/TopBar/TopBar";
// import NavBar from "./components/NavBar/NavBar";
// import Slider from "./components/HomeSlider/SliderVideo";
import HomeContent from "./components/HomeContent/HomeContent";
import CorporateService from "./components/HomeContent/CorporateService";
// import Footer from "./components/Footer/Footer";
// import NavbarNew from "./components/NavBar/NavbarNew";
import Slider from "./components/HomeSlider/Slider";
import NewNavbar from "./components/NavBar/NewNavbar";
import FooterNew from "./components/Footer/FooterNew";

export const metadata = {
  title: "Provide Innovative Support System to Any Business - Elevate Business Solutions DMCC",
  description: "Provide Innovative Support System to Any Business",
  keywords:"website development service dubai, digital marketing service dubai, accounting service dubai"
};

export default function Home() {
  return (
    <>
    {/* <TopBar/> */}
    {/* <NavbarNew/> */}
    {/* <NavBar/> */}
    <NewNavbar/>
    <Slider/>
    {/* <SliderVideo/> */}
    {/* <marquee className="marquee-text">May the beauty of Diwali fill your heart with happiness, warmth, and endless memories with loved ones.</marquee> */}
    <HomeContent />
    <CorporateService/>
    {/* <Footer/> */}
    <FooterNew/>
    
    </>
  );
}

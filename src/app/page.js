import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/HomeSlider/Slider";
import HomeContent from "./components/HomeContent/HomeContent";
import CorporateService from "./components/HomeContent/CorporateService";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Provide Innovative Support System to Any Business - Elevate Business Solutions DMCC",
  description: "Provide Innovative Support System to Any Business",
  keywords:"website development service dubai, digital marketing service dubai, accounting service dubai"
};

export default function Home() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Slider/>
    <HomeContent />
    <CorporateService/>
    <Footer/>
    
    </>
  );
}

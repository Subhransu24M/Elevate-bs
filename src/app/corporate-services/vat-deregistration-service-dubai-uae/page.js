import TopBar from '@/app/components/TopBar/TopBar'
import './vatdereg.css'
import NavBar from '@/app/components/NavBar/NavBar'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumb'
import VatDeRegCnt from './VatDeRegCnt'
import Footer from '@/app/components/Footer/Footer'

export const metadata = {
  title: "VAT deregistration Services in Dubai, UAE | Dubai VAT Consultants",
  description: "Need VAT deregistration in Dubai? Elevate Business Services offers seamless solutions to help your business exit the VAT regime efficiently.",
  keywords: "Deregistration of vat in uae, VAT Deregistration Services in Dubai UAE,VAT Deregistration Services in UAE,uae vat deregistration,vat deregistration guide,Documents required for vat deregistration in uae"
};
const page = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <BreadCrumb page="VAT De-Registration"/>
    <VatDeRegCnt/>
    <Footer/>
    </>
  )
}

export default page
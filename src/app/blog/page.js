import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import NavBar from '../components/NavBar/NavBar'
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
import Footer from '../components/Footer/Footer'
import Blog from './Blog'
import NewNavbar from '../components/NavBar/NewNavbar'
import FooterNew from '../components/Footer/FooterNew'

export const metadata = {
  title: "Blog - Elevate Business Solutions ",
  description: "Stay tune with our latest updates through our blog posts.",
  keywords:"blog,topics"
};
const page = () => {
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Blog"/>
    <Blog/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
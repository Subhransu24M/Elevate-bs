import React from 'react'
// import TopBar from '../components/TopBar/TopBar'
// import NavBar from '../components/NavBar/NavBar'
import BreadCrumb from '../components/BreadCrumbs/BreadCrumb'
// import Footer from '../components/Footer/Footer'
import Blog from './Blog'
import NewNavbar from '../components/NavBar/NewNavbar'
import FooterNew from '../components/Footer/FooterNew'

export const metadata = {
  title: "Blog - Elevate Business Solutions ",
  description: "Stay tune with our latest updates through our blog posts.",
  keywords:"blog,topics",
  alternates: {
    canonical: "https://www.elevatebs.com/blog", // Specify the canonical URL for this page
  },
};
const page = () => {
  const breadcrumbBackground = "/images/breadcrump-bg/blog.jpg";
  return (
    <>
    <div className="fullwrapper">
    {/* <TopBar/>
    <NavBar/> */}
    <NewNavbar/>
    <BreadCrumb page="Blog" backgroundImage={breadcrumbBackground}/>
    <Blog/>
    {/* <Footer/> */}
    <FooterNew/>
    </div>
    </>
  )
}

export default page
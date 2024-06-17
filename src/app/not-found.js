import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import TopBar from "./components/TopBar/TopBar"
import Link from "next/link";
import './notfound.css'
const NotFound = () => {
    return (
        <>
            <TopBar />
            <NavBar />
            <div className="error-blk">
                <div className="container">
                {/* <h2 className='all-serv-tlt'>We’re sorry! </h2> */}
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12">
                            <div className="error-block-one">
                                <div className='error-box e1'>
                                    <div className="content">
                                        <div className="error-number e1">404</div>
                                        <h4 className="er-tlt">We’re sorry!</h4>
                                        <div className="text">The page you’re looking for may have been moved or deleted. Please visit our <Link className='text-link' href='/'>Home Page</Link> or visit one of the popular sites shown below.</div>

                                        <div className="explore-blk">
                                            <h4>Continue exploring</h4>
                                            <div className="explor-list-blk">
                                                <div className="explor-list">
                                                    <Link href="/website-development">Website Development</Link>
                                                </div>
                                                <div className="explor-list">
                                                    <Link href="/ecommerce-solutions">E-Commerce Solutions</Link>
                                                </div>
                                                <div className="explor-list">
                                                    <Link href="/digital-marketing">Digital Marketing</Link>
                                                </div>
                                            </div>
                                            <div className="explor-list-blk">
                                            <div className="explor-list">
                                                    <Link href="/corporate-services">Coporate Services</Link>
                                                </div>
                                                <div className="explor-list">
                                                    <Link href="/contact-us">Contact us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
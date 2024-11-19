import "./newnavbar.css";
import ebslogo from '../../../../public/logo/ebs-logo-svg.svg'
import Image from 'next/image';
import Link from 'next/link';

const NewNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-white my-csm-nav">
                <div className="container">
                    <Link className="navbar-brand" href="/"><Image src={ebslogo} width={120} height={120} priority={false} alt="logo"></Image></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-cc" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <div className="menu-close-btn-blk">
                                <button type="button" className="btn-close mn-close-btn" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Close"></button>
                            </div>
                            <li className="nav-item">
                                {/* <Link className="nav-link active my-nav-li" aria-current="page" href="/">Home</Link> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my-nav-li" href="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle my-nav-li" href="#" id="businessessentialsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Business Essentials</Link>
                                <ul className="dropdown-menu" aria-labelledby="businessessentialsDropdown">
                                    <li><Link className="dropdown-item my-nav-li" href="/corporate-services">Corporate Services</Link></li>
                                    <li className="nav-item dropdown dropend">
                                        <Link className="nav-link dropdown-toggle my-nav-li" href="#" id="businessDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Business</Link>
                                        <ul className="dropdown-menu" aria-labelledby="businessDropdown">
                                            <li><Link className="dropdown-item my-nav-li" href="#">Business Formation</Link></li>
                                            <li><Link className="dropdown-item my-nav-li" href="#">Business Liquidation</Link></li>
                                            <li><Link className="dropdown-item my-nav-li" href="#">Trade Mark Registration</Link></li>
                                            <li><Link className="dropdown-item my-nav-li" href="#">Business Plan</Link></li>
                                        </ul>

                                    </li>

                                    <li><Link className="dropdown-item my-nav-li" href="#">ADGM</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle my-nav-li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Digital Transformations
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item my-nav-li" href="/website-development">Website Development</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/ecommerce-solutions">ECommerce Solutions</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/app-development">App Development</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/digital-marketing">Digital Marketing</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link my-nav-li" href="/contact-us">Contact & Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hdr-cta">
                        <Link href="/contact-us">Book Free Consultation</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NewNavbar
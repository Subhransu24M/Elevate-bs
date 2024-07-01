import "./navbar.css";
import ebslogo from '../../../../public/logo/ebs-logo.png'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-white my-csm-nav">
                <div className="container">
                    <Link className="navbar-brand" href="/"><Image src={ebslogo} width={120} height={120} priority={false}></Image></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-cc" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                        <div className="menu-close-btn-blk">
                        <button type="button" className="btn-close mn-close-btn" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Close"></button>
                        </div>
                            <li className="nav-item">
                                <Link className="nav-link active my-nav-li" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my-nav-li" href="/about">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle my-nav-li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    IT Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item my-nav-li" href="/website-development">Website Development</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/ecommerce-solutions">ECommerce Solutions</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/app-development">App Development</Link></li>
                                    <li><Link className="dropdown-item my-nav-li" href="/digital-marketing">Digital Marketing</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my-nav-li" href="/corporate-services">Corporate Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my-nav-li" href="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default NavBar
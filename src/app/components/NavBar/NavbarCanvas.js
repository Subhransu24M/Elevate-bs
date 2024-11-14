import Link from "next/link";
import Image from "next/image";
import ebslogo from '../../../../public/logo/ebs-logo.png';
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CgMenuRight } from "react-icons/cg";
const NavbarCanvas = () => {
    return (
        <>
            <button className="navbar-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><CgMenuRight /></button>

            <div className="offcanvas offcanvas-start left-site-canvas-blk" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <Link className="navbar-brand side-canvs-logo" href="/"><Image src={ebslogo} width={120} height={120} priority={false} alt="logo"></Image></Link>
                    <button type="button" className="btn-close btn-close-custom text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {/* Menu Section */}
                    <nav>
                        <div className="menu-section">
                            <ul className="navbar-menu-ul">
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
                                    <ul className="dropdown-menu drp-menu" aria-labelledby="navbarDropdown">
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
                    </nav>
                    <div className="left-cnvs-cnt-tlt-blk">
                        <div className="left-canvas-scl-blk">
                            {/* <h6>Follow us on</h6> */}
                            <div className="left-canvas-scl-icn-blk">
                                <div className="lft-cnv-scl-blk-icn">
                                    <Link href="#" target="_blank"><FaFacebookF className="scl-icn" /></Link>
                                </div>
                                <div className="lft-cnv-scl-blk-icn">
                                    <Link href="#" target="_blank"><FaInstagram className="scl-icn" /></Link>
                                </div>
                                <div className="lft-cnv-scl-blk-icn">
                                    <Link href="#" target="_blank"><FaLinkedinIn className="scl-icn" /></Link>
                                </div>
                                <div className="lft-cnv-scl-blk-icn">
                                    <Link href="#" target="_blank"><FaXTwitter className="scl-icn" /></Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className="cnt-dtls">
                            <div className="cta-blk-icon">
                                <Link href="tel:+97144258131"><BsTelephone className="telp-icon" /></Link>
                            </div>
                            <div className="cta-blk-icon">
                                <Link href="#"><BsWhatsapp className="whatsapp-icon" /></Link>
                            </div>
                            <div className="cta-blk-icon">
                                <Link href="mailto:info@elevatebs.com"><SiGmail className="mail-icon" /></Link>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>.....</p>
                </div>
            </div> */}
            {/* <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div> */}
        </>
    )
}

export default NavbarCanvas
import Link from "next/link";
import "./topbar.css";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";



const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12">
                            <level className="top-p">Welcome To Elevate Business Solutions</level></div>
                        <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="top-bar-call">
                                <div className="t-b-call-icn">
                                    <IoCallOutline className="top-cm-icn"/>
                                    <Link className="t-b-call-num" href="tel:+97144258131">+971 (0)44258131</Link>
                                </div>
                                <div className="t-b-call-icn">
                                    <IoMailOutline className="top-cm-icn"/>
                                    <Link className="t-b-mail" href="mailto:info@elevatebs.com">info@elevatebs.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 col-xs-12">
                            <div className="t-b-scl">
                                <div className="scl-icn-top">
                                    <a href="#"><FaFacebookF className="top-scl-icn"/></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaInstagram className="top-scl-icn"/></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaLinkedinIn className="top-scl-icn"/></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaTwitter className="top-scl-icn"/></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
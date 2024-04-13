import Link from "next/link";
import "./topbar.css";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";

const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12">Welcome To Elevate Business Solutions</div>
                        <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="top-bar-call">
                                <div className="t-b-call-icn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-520q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm160 0q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600q17 0 28.5 11.5T680-560q0 17-11.5 28.5T640-520Zm160 0q-17 0-28.5-11.5T760-560q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520Zm-2 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                    <Link className="t-b-call-num" href="tel:+97144258131">+971 (0)44258131</Link>
                                </div>
                                <div className="t-b-call-icn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                    <Link className="t-b-mail" href="mailto:info@elevatebs.com">info@elevatebs.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 col-xs-12">
                            <div className="t-b-scl">
                                <div className="scl-icn-top">
                                    <a href="#"><FaFacebookF /></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaInstagram /></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaLinkedinIn/></a>
                                </div>
                                <div className="scl-icn-top">
                                    <a href="#"><FaTwitter/></a>
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
import Image from "next/image";
import spcpkgimg2 from './images/spc-company-formation.png';
import whyspcimg from './images/whyspc.jpg';
import SpcpricetableCnt from "./SpcpricetableCnt";
import WhyspcMdl from "./WhyspcMdl";
import FreezonedocMdl from "./FreezonedocMdl";
import CompbranchdocMdl from "./CompbranchdocMdl";
import SpcfrzprocdAccr from "./SpcfrzprocdAccr";

const SpcCnt = () => {
    return (
        <>
            <div className="spc-main-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="spc-mancnt-blk">
                                <h1 className="spc-mancnt-tlt">SPC Company Formation</h1>
                                <p className="spc-mancnt-p">Established in 2017 by His Highness Sheikh Dr. Sultan bin Muhammad Al-Qasimi, the Ruler of Sharjah, SPC Free Zone is the world’s first free zone exclusively dedicated to the global print and publishing industry. Whether you need co-working spaces, retail outlets, commercial offices, or storage facilities, SPC Free Zone provides everything required to support your publishing endeavors. Located just 30 minutes from Dubai's business district, SPC Free Zone offers an ideal environment to write, design, print, publish, and distribute—all from one state-of-the-art location.</p>
                                <div className="spc-main-sbblk">
                                    <h4>Setup Your SPC Freezone Company with Elevate</h4>
                                    <span className="spc-cnt-spnprc">Starting from AED 5,750 <i className="fa-solid fa-location-arrow spc-prc-arrw"></i></span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="spc-pkgimg-blk">
                                <div className="spc-pkgimg-blk-bg">
                                    <Image className="spcpkgimg" src={spcpkgimg2} alt="spc freezone " />
                                    {/* <div className="spcimgcapt">
                                        <h2>SPC COMPANY FORMATION</h2>
                                        <span className="spc-mancnt-spnprc">Starting from AED 5,750</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-spc-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7 col-xl-7 col-sm-12">
                            <div className="shy-spccntblk">
                                <h2>Why Choose SPC Free Zone for Your Business Setup?</h2>
                                <p>SPC Free Zone offers a host of advantages for businesses in the publishing industry:</p>

                                <WhyspcMdl />
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-5 col-sm-12">
                            <div className="shy-spcimgblk">
                                <Image className="whyspcimgcls" src={whyspcimg} alt="SPC Free Zone Business Setup" />
                                {/* <div className="whychosimg-cap">
                                    <h3>SPC Free Zone for Business Setup</h3>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spc-bsn-lcn-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="spc-bsnlcncnt">
                                <h2>Business Licenses in SPC Free Zone</h2>
                                <p>At Sharjah Publishing City Free Zone (SPC Free Zone), investors can choose from a variety of business licenses to suit their specific needs. The available license types include:</p>
                                <div className="spcbsnlcnul">
                                    <ul>
                                        <li><i className="fa-solid fa-arrow-right-long"></i> Commercial License / Import Export / Trading</li>
                                        <li><i className="fa-solid fa-arrow-right-long"></i> General Trading License</li>
                                        <li><i className="fa-solid fa-arrow-right-long"></i> Services License</li>
                                        <li><i className="fa-solid fa-arrow-right-long"></i> Ecommerce / Trading License</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="spc-docreqblk">
                                <h2>Documents Required to Set Up a Company in SPC Free Zone</h2>
                                <p>Setting up a company in the SPC Free Zone is a streamlined process, but certain documentation is required depending on the type of establishment you are forming. Here are the requirements:</p>
                                <div className="spc-docblksec">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                                            <div className="docmdlblk">
                                                <h3>To Set Up a Freezone Establishment (FZE)</h3>
                                                <div className="spc-frzdocbtn">
                                                    <FreezonedocMdl />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                                            <div className="docmdlblk">
                                                <h3>To Set Up a Branch of a Company</h3>
                                                <div className="spc-frzdocbtn">
                                                    <CompbranchdocMdl />
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
            <div className="spc-prctabletlt-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12">
                            <SpcpricetableCnt />
                        </div>
                    </div>
                </div>
            </div>

            <div className="spcfrxprocsblk">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="spcfrxcnt">
                                <h2 className="spcfrxcnttlt">Procedure for Setting Up a Business in SPC Free Zone</h2>
                                <p className="spcfrxcntp">Establishing your business in the SPC Free Zone is a straightforward process, designed to be efficient and cost-effective. With Elevate Business Solutions by your side, you can navigate each step with ease. Here’s how to begin:</p>
                                <SpcfrzprocdAccr />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="getstrtspcblk-bg">
                                <div className="getstrtspcblk">
                                    <h2 className="getstrtspcblktlt">Get Started with SPC Free Zone</h2>
                                    <p className="getstrtspcblktltp">With its strategic location and industry-specific focus, SPC Free Zone offers a unique opportunity for businesses in the publishing industry and beyond. Elevate Business Solutions is here to assist you every step of the way, ensuring a smooth and efficient company setup process. Contact us today to find the best business license for your needs and get started on your journey to success in Sharjah Publishing City Free Zone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SpcCnt
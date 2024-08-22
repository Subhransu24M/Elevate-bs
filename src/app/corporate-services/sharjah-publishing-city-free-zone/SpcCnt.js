import Image from "next/image";
import spcpkgimg2 from './images/spc-company.jpg';
import whyspcimg from './images/whyspc2.jpg';
import SpcpricetableCnt from "./SpcpricetableCnt";
import WhyspcMdl from "./WhyspcMdl";

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
                                    <div className="spcimgcapt">
                                        <h2>SPC COMPANY FORMATION</h2>
                                        <span className="spc-mancnt-spnprc">Starting from AED 5,750</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-spc-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="shy-spccntblk">
                                <h2>Why Choose SPC Free Zone for Your Business Setup?</h2>
                                <p>SPC Free Zone offers a host of advantages for businesses in the publishing industry:</p>

                                <WhyspcMdl/>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="shy-spcimgblk">
                                <Image className="whyspcimgcls" src={whyspcimg} alt="SPC Free Zone Business Setup" />
                                <div className="whychosimg-cap">
                                    <h3>SPC Free Zone for Business Setup</h3>
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

        </>
    )
}

export default SpcCnt
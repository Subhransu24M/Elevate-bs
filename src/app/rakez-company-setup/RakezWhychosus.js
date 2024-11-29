
import AdgmForm from "../adgm-company-service-provider/AdgmForm"
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

const RakezWhychosus = () => {
    return (
        <>
            <div className="rakezwhychos-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-8 col-lg-8 col-sm-12">
                            <div className="rakez-whychos-cnt">
                                <h2>Why Choose Elevate Business Solutions for RAKEZ Business Setup?</h2>
                                
                                <p>At Elevate Business Solutions, company formation experts at RAKEZ, we are committed to helping you in set up a company in Ras Al Khaimah With a deep understanding of Dubai's business landscape, we provide the expertise and support necessary to guide your business toward success. Whether you’re starting fresh or expanding, we ensure a smooth and efficient setup process, enabling you to take full advantage of the opportunities RAKEZ offers.</p>
                                <h3>Why Choose Us?</h3>
                                <ul>
                                    <li><MdDoubleArrow /> Extensive Industry Knowledge</li>
                                    <li><MdDoubleArrow /> Customized Solutions</li>
                                    <li><MdDoubleArrow /> Legal Expertise</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12">
                            <div className="rakez-whychos-frm-blk">
                                <AdgmForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ready-tostart-blk">
                <div className="container">
                    <div className="row">
                        <h2>Ready to Start Your RAKEZ Free Zone Company Setup?</h2>
                        <div className="readytostart-p">
                        <p>Contact us today to explore your options for RAKEZ Free Zone Company Setup, calculate your RAKEZ company setup cost, and access customized solutions. </p>
                        </div>
                        
                        <div className="ready-start-btnblk">
                            <Link href="/contact-us">Contact us today <CiLocationArrow1 />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RakezWhychosus
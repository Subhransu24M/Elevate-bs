import BusinessSetupform from "../components/BusinesssetupForm/BusinessSetupform";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const WhychosesaifElevate = () =>{
    return (
        <>
        <div className="whychoselvblk-saif">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12">
                        <div className="whychossaifelvcnt">
                            <h2>Why Choose Elevate Business Solutions for Company Formation in Sharjah Free Zone?</h2>
                            <p>At Elevate Business Solutions, we are dedicated to streamlining your company formation in Sharjah Free Zone. Our experienced team of business setup consultants, legal experts, and PRO executives is here to provide a smooth and successful experience for entrepreneurs and businesses aiming to thrive in this vibrant economic hub.</p>
                            <ul>
                                <li><HiMiniArrowLongRight /> Expert Guidance</li>
                                <li><HiMiniArrowLongRight /> Streamlined Processes</li>
                                <li><HiMiniArrowLongRight /> Ongoing Support</li>
                            </ul>
                            <h2>Ready for company formations in UAE? </h2>
                            <p>Contact Elevate Business Solutions for expert assistance with company formation in SAIF Zone and a hassle-free experience. Let us help you navigate the business setup in Sharjah Airport Free Zone and achieve your business goals in SAIF Zone.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                    <div className="whychossaifelvfrm">
                        {/* <CorporateForm/> */}
                        <BusinessSetupform/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhychosesaifElevate
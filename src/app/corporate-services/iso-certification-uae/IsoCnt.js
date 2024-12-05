import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import Image from 'next/image';
import isocertimg1 from './images/iso-certification.jpg';
import isocertimg2 from './images/iso-certification-3.jpg';
import isocertimg4 from './images/iso-certification-4.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import IsoCertificationAccord2 from "./IsoCertificationAccord2";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

const IsoCnt = () => {
    return (
        <>
            <div className="iso-cert-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="iso-hd">ISO Certification in UAE</h1>
                            <h4 className="iso-sub-tlt">Unlocking Excellence: Embrace the Power of ISO Certification in UAE! </h4>
                            <p>Propel your business to the pinnacle of success with our trusted ISO certification services in Dubai. Gain an undeniable competitive edge, enhance customer trust, and inspire confidence in your operations. From impeccable quality management to robust environmental practices, our expert team ensures your organization shines brightly on the global stage. Join the elite league of ISO-certified champions and let your business soar to new heights in the vibrant landscape of the UAE. Dare to dream big, achieve greatness, and revolutionize your future with ISO certification today!</p>
                            <div className="iso-certf-ctablk">
                                <Link href="/contact-us">Contact us <CiLocationArrow1 />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={isocertimg1} className="isoimg1" alt="iso certification service uae" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="iso-cert-sec2">
                <div className="iso-cert-sec2-left">
                    {/* <Image src={isocertimg2} className="isoimg2" alt="iso certification service uae"/> */}
                </div>
                <div className="iso-cert-sec2-right">
                    <h2 className="iso-subhd">Our ISO Certification solutions are deemed to be the ultimate in terms of :</h2>
                    <ul className="iso-cerft-ul">
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Unmatched Efficiency in Service Delivery </li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Revolutionary Certification Approach </li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Accelerate Project Deployment and Ensure Timely Completion </li>
                    </ul>
                    <p>With a team of highly experienced ISO consultants in Dubai, we collaborate with renowned ISO certification bodies worldwide to streamline the certification process for your organization. Our services encompass a wide range of standards, including ISO 9001:2015, OHSAS 18001, HACCP ISO 22000, ISO 14001, ISO 20000, SA 8000, ISO 27001, ISO 13485, Organic Certification, CE Certification, ISO 17025 NABL accreditation, and Integrated ISO Certification, along with various management system standards. We ensure a seamless journey towards certification, tailored to your preferences and requirements.</p>
                    <p>
                        Our ISO certification services extend across all 7 emirates of UAE, including Abu Dhabi, Dubai, Sharjah, Ajman, Umm al-Quwain, Ras al-Khaimah, and Fujairah, catering to a diverse range of industries.
                    </p>
                </div>
            </div>

            <div className="iso-cert-sec3">
                <div className="iso-cert-sec3-left">
                    <h2 className="iso-subhd">Key Advantages of ISO Certification in the UAE</h2>
                    <p>Obtaining ISO certification in the United Arab Emirates (UAE) offers several key advantages to organizations. Here are some of the benefits:</p>
                    <ul className="iso-cerft-ul">
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Enhanced credibility and reputation.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Increased customer confidence.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Improved operational efficiency.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Compliance with legal and regulatory requirements.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Competitive advantage in the market.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Access to new markets and opportunities.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Cultivation of a continuous improvement culture.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Better supplier relationships and a reliable supply chain.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Improved employee engagement and satisfaction.</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Effective risk management and mitigation.</li>
                    </ul>
                </div>
                <div className="iso-cert-sec3-right">
                    <h2 className="iso-subhd">List of ISO Certificates in UAE</h2>
                    <IsoCertificationAccord2 />
                </div>

            </div>
            <div className="iso-cert-sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className="iso-subhd">ISO Certification Consultant in UAE</h2>
                            <p>As the leading ISO consultants in Dubai, we provide comprehensive insights into operational and process improvements for your organization. Our expertise extends to various aspects of ISO certification in Dubai, including ISO training, ISO auditing, and ISO 9001 certification consulting. Our specialized ISO certification consulting package in UAE encompasses the following niche areas:</p>
                            <ul className="iso-cerft-ul">
                                <li ><FaLongArrowAltRight className="iso-cerft-arrow" />Quality Management</li>
                                <li><FaLongArrowAltRight className="iso-cerft-arrow" />Marketing Management</li>
                                <li><FaLongArrowAltRight className="iso-cerft-arrow" />Human Resource Management</li>
                                <li><FaLongArrowAltRight className="iso-cerft-arrow" />Finance Management</li>
                                <li><FaLongArrowAltRight className="iso-cerft-arrow" />Environmental Management</li>
                                <li><FaLongArrowAltRight className="iso-cerft-arrow" />Information Security Management</li>
                            </ul>
                            <p>By availing of our ISO certificate in UAE services, you can optimize your business practices and ensure ISO compliance throughout your organization.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={isocertimg4} className="isoimg3" alt="iso certification service uae" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="iso-cert-sec5">
                <div className="iso-cert-sec5-left">
                    <h2 className="iso-subhd">Why Choose Elevate for ISO Certification in UAE?</h2>
                    <p>Team Elevate adopts a unique approach, starting from the bottom and working our way up, to ensure a 100% success rate for ISO Certification services in Dubai. Our ISO consultants in Dubai are industry experts with unparalleled experience from around the globe. We provide top-notch services for ISO certification in the UAE, guiding your organization towards corporate excellence and sustainable competitive advantage. Our ISO consulting services in the UAE are renowned for their dedicated and prompt delivery, coupled with extensive industry knowledge, making us the highest-rated ISO consultants in the region.</p>
                    <ul className="iso-cerft-ul">
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Streamline processes and documentation</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Ensure compliance with ISO standards</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Enhance quality management systems</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Improve operational efficiency</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Increase customer satisfaction</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Demonstrate commitment to international standards</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Access global markets</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Enhance credibility and reputation</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Facilitate continuous improvement</li>
                        <li><FaLongArrowAltRight className="iso-cerft-arrow" />Mitigate risks and increase resilience</li>
                    </ul>
                </div>
                <div className="iso-cert-sec5-right">
                    <div className="iso-cert-sec5-right-cntfrm">
                        <CorporateForm />
                    </div>
                </div>

            </div>
        </>
    )
}

export default IsoCnt
import './adgm.css';
import { MdOutlineDoubleArrow } from "react-icons/md";
import AdgmkeyBenefits from './AdgmkeyBenefits';
import AdgmkeyServices from './AdgmkeyServices';
import Image from 'next/image';
import adgmimage from './images/adgm.jpg';
import adgmimage2 from './images/adgm-company-formation-abudhabi.jpg';
import adgmimage3 from './images/adgm-company-formation.webp';
import AdgmformNew from '../components/AdgmForm/AdgmformNew';
// import AdgmForm from './AdgmForm-old';

const AdgmContent = () => {
    return (
        <>
            <div className="adgm-first-blk">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='compny-serv-provd-adgm'>
                                <h1>Company Service Provider for ADGM</h1>
                                <p>Abu Dhabi Global Market (ADGM) is a premier international financial center located in the heart of the United Arab Emirates (UAE). Setting up a company in ADGM involves navigating a series of regulatory steps, each designed to ensure robust compliance and operational excellence. As an approved Company Service Provider in the Abu Dhabi Global Market, Elevate Business Solutions offers expert guidance and support to help you establish and manage your business within this dynamic free zone.</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='compny-serv-provd-adgm-img'>
                                <Image src={adgmimage} alt="adgm company formation abudhabi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adgm-snd-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12'>
                            <div className='benefits-adgm'>
                                <h2>Benefits of ADGM Company Formation</h2>
                                <p>Incorporate your business in the UAE with ADGM and gain access to a stable and predictable regulatory environment, a skilled workforce, and a strategic location for trade and investment. With ADGM, you can easily register your company and obtain the necessary licenses to operate in the UAE. Our team of experts will also provide ongoing compliance support to ensure your business stays in line with local regulations. Choose ADGM for a smooth and successful incorporation experience in the UAE.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12'>
                            <h3 className='adgm-key-bngt-tlt'>Key Benefits of ADGM Company Formation</h3>
                            <AdgmkeyBenefits/>
                        </div>
                        <div className='col-md-5 col-lg-5 col-xl-5 col-sm-12'>
                        <div className='compny-serv-provd-adgm-img-snd'>
                                <Image src={adgmimage2} alt="adgm company formation abudhabi" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-xm-12'>
                            <p className='key-benf-p'>
                            Experience the benefits of operating in a leading financial center with ADGM Incorporation in UAE. Our free zone offers a range of advantages for businesses, including 100% foreign ownership, no corporate or personal income taxes, and a streamlined process for company formation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adgm-thrd-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12'>
                            <div className='benefits-adgm'>
                                <h2>Our Expertise in ADGM Incorporation in UAE</h2>
                                <p>At Elevate Business Solutions, we specialize in providing complete company services that facilitate smooth and efficient ADGM incorporation in UAE. Our team of seasoned professionals is dedicated to ensuring your business meets all regulatory requirements, allowing you to focus on your core operations. As a licensed Company Service Provider for ADGM, we offer a range of services to support your business from inception through to ongoing compliance.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5 col-lg-5 col-xl-5 col-sm-12'>
                        <div className='compny-serv-provd-adgm-img-thrd'>
                                <Image src={adgmimage3} alt="adgm company formation abudhabi" />
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12'>
                        <h3 className='adgm-key-bngt-tlt'>Key Services We Offer as a CSP for ADGM</h3>
                        <AdgmkeyServices/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adgm-frth-blk'>
                <div className='container'>
                    <h2>Why Choose Elevate Business Solutions  as Your CSP?</h2>
                    <div className='row'>
                        <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
                            <div className='adgm-why-chos-cnt-blk'>
                                <p>As one of the leading entities licensed to provide CSP services in ADGM, Elevate Business Solutions brings unparalleled expertise and experience to the table. Our deep understanding of ADGM’s regulatory environment enables us to offer tailored solutions that meet your specific business needs. Here’s why partnering with Elevate is the right choice:</p>
                                <ul className='adgm-why-chos-ul'>
                                    <li><MdOutlineDoubleArrow />
                                    <span><b>Regulatory Compliance:</b>We ensure your business meets all regulatory requirements, helping you avoid costly penalties and ensuring seamless operations within ADGM.</span></li>
                                    <li><MdOutlineDoubleArrow />
                                    <span><b>Expert Guidance:</b>Our team of professionals provides expert advice and support throughout the company setup and operational phases.</span></li>
                                    <li><MdOutlineDoubleArrow />
                                    <span><b>Comprehensive Services:</b> From incorporation to ongoing compliance, we offer a full suite of services designed to support your business at every stage.</span></li>
                                    <li><MdOutlineDoubleArrow />
                                    <span><b>Strategic Location:</b> ADGM offers numerous benefits, including 100% foreign ownership, no corporate or personal income taxes, and a strategic location that facilitates trade and investment.</span></li>

                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
                            <div className='adgm-frm-blk'>
                                {/* <AdgmForm/> */}
                                <AdgmformNew/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adgm-fth-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <h2>ADGM Company Setup Services</h2>
                            <p>Setting up a company in ADGM offers numerous advantages, including a stable regulatory environment, strategic benefits for trade and investment, and no corporate or personal income taxes. Our ADGM company setup services are designed to make this process as smooth and efficient as possible. We handle all aspects of ADGM company formation, ensuring that your business is compliant with all necessary regulations and positioned for success.</p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <h2 className='adgm-rdy'>Ready to establish your presence in ADGM? </h2>
                            <p className='adgm-rdy-p'>Contact Elevate Business Solutions today to learn more about how we can assist you with your ADGM Company Setup in UAE. As your trusted Company Service Provider for ADGM, we are committed to helping your business thrive in this premier international financial center.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdgmContent
import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import TaxModal1 from "./TaxModal1"
import TaxModal2 from "./TaxModal2"
import TaxModal3 from "./TaxModal3"
import Image from 'next/image';
import corptaximg1 from './images/Corporate-Tax-img1.webp';
import TaxConsultancyBenefits from "./TaxConsultancyBenefits";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

const TaxContent = () => {
  return (
    <>
    <div className="tax-con-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="rest-hd1">Get Expert Tax Consultancy Services in UAE</h1>
                            <p>Selecting a trustworthy and knowledgeable tax consultant is crucial in gaining an understanding of a country's taxation policies, especially when residing and operating a business there. Elevate stands out as a premier tax consultancy in Dubai , UAE, providing tax services to companies throughout the region. With Elevate's support, organizations can navigate the intricacies of tax payment and legal obligations more effectively. Our team of experienced tax consultants ensures clients receive top-quality services, enabling their businesses to comply with global tax regulations.</p>
                            <div className="rest-hd1-btn-blk">
                                <Link href="/contact-us">Contact us <CiLocationArrow1 />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="corp-img-blk">
                            <Image src={corptaximg1} alt="best corporate tax consultants dubai uae" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tax-con-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-7 col-xl-7 col-sm-12 col-xs-12">
                            <h2 className="rest-hd2">Different Categories of<br></br> Tax Consulting Services in UAE</h2>
                            <p>The United Arab Emirates (UAE) has positioned itself as an alluring destination for various businesses, spanning from startups to large corporations, due to its appealing 0% personal income tax, the liberal allowance of business activities in free zones, and the favorable import tariff structures. The UAE government has consistently strived to create an attractive and competitive tax environment. Over time, the UAE has established distinct tax categories:</p>
                            <div className="row mt-4">
                                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                                    <div className="tax-cons-mdl-box">
                                        <h6>CORPORATE TAX</h6>
                                        <TaxModal1/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                                    <div className="tax-cons-mdl-box">
                                        <h6>VALUE-ADDED TAX (VAT)</h6>
                                        <TaxModal2/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                                    <div className="tax-cons-mdl-box">
                                        <h6>EXCISE TAX</h6>
                                        <TaxModal3/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-5 col-sm-12 col-xs-12">
                            <h2 className="rest-hd2">Benefits of <br></br>Tax Consultancy Services in UAE</h2>
                            <p>Tax consultancy services in the UAE can provide numerous benefits to businesses operating in the region, including:</p>
                            <TaxConsultancyBenefits/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="tax-con-sec4">
                        <div className="tax-con-sec4-left">
                            <div className="rest-hd2-tlt-blk">
                            <h2 className="rest-hd2">How do Elevate’s Tax Consultants bring added value to your business?</h2>
                            </div>
                            <div className="rest-hd2-p-blk">
                            <p>For many years, Elevate has been offering professional tax consulting services in the UAE, satisfying the needs of a diverse clientele with professionalism and precision. As one of the leading tax consultant firms in Dubai, UAE, our dedicated team of experts specializes in assisting businesses in managing their tax structures effectively, enhancing operational efficiency and financial strategies.</p>
                            <p>We bring forth an array of comprehensive solutions, leveraging our profound understanding of the local and regional tax landscape to provide unparalleled guidance. Recognizing the importance of compliance with Federal Tax Authority (FTA) regulations, we conduct in-depth tax health checks to assess the precise impact of taxes on your business and formulate efficient, tailored recommendations to meet FTA requirements. Elevate serves as your trusted tax advisor in the UAE, ensuring your business navigates the intricate realm of taxes with confidence and proficiency, standing out as a reliable partner for all your tax consultancy needs.</p>
                            </div>
                            
                            <ol className="corp-tax-ol">
                                <li><FaLongArrowAltRight className="corp-tax-arrow"/>Tax Filling</li>
                                <li><FaLongArrowAltRight className="corp-tax-arrow"/>Tax Registration</li>
                                <li><FaLongArrowAltRight className="corp-tax-arrow"/>Tax Planning</li>
                                <li><FaLongArrowAltRight className="corp-tax-arrow"/>Tax Training</li>
                                <li><FaLongArrowAltRight className="corp-tax-arrow"/>Tax Implementation </li>
                            </ol>
                            <h6 className="tax-consult-lastp">
                                Maximize your tax savings and minimize risk with our expert tax consultancy services. Contact us now to ensure your business complies with all tax regulations!
                            </h6>

                        </div>
                        <div className="tax-con-sec4-right">
                            <CorporateForm/>
                        </div>
                    
            </div>
    </>
  )
}

export default TaxContent
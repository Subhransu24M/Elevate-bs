import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import TaxModal1 from "./TaxModal1"
import TaxModal2 from "./TaxModal2"
import TaxModal3 from "./TaxModal3"
import Image from 'next/image';
import corptaximg1 from './images/Corporate-Tax-img1.webp';
import TaxConsultancyBenefits from "./TaxConsultancyBenefits";
const TaxContent = () => {
  return (
    <>
    <div className="tax-con-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="rest-hd1">Get Expert Tax Consultancy Services in UAE</h1>
                            <p>Selecting a trustworthy and knowledgeable tax consultant is crucial in gaining an understanding of a country's taxation policies, especially when residing and operating a business there. Elevate stands out as a premier tax consultancy in Dubai , UAE, providing tax services to companies throughout the region. With Elevate's support, organizations can navigate the intricacies of tax payment and legal obligations more effectively. Our team of experienced tax consultants ensures clients receive top-quality services, enabling their businesses to comply with global tax regulations.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="corp-img-blk">
                            <Image src={corptaximg1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tax-con-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-7 col-xl-7 col-sm-12 col-xs-12">
                            <h2 className="rest-hd2">Different Categories of Tax Consulting Services in UAE</h2>
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
                            <h2 className="rest-hd2">Benefits of tax consultancy services in UAE</h2>
                            <p>Tax consultancy services in the UAE can provide numerous benefits to businesses operating in the region, including:</p>
                            <TaxConsultancyBenefits/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="tax-con-sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="rest-hd2">How do Elevate’s Tax Consultants bring added value to your business?</h2>
                            <p>For many years, Elevate has been offering professional tax consulting services in the UAE, satisfying the needs of numerous clients. We take pride in catering to a diverse clientele, consistently meeting their unique requirements with professionalism and precision. Our dedicated team of experts specializes in assisting businesses in the effective management of their tax structures, thereby enhancing their operational efficiency and financial strategies.</p>
                            <p>As one of the leading tax consultant firms in Dubai, UAE, Elevate Auditing brings forth an array of comprehensive solutions. Our profound understanding of the local and regional tax landscape allows us to offer unparalleled guidance. We recognize the significance of compliance with the Federal Tax Authority (FTA) regulations and guidelines. To this end, we provide an in-depth tax health check to assess the precise impact of taxes on your business. Based on our findings, we formulate efficient recommendations tailored to meet FTA requirements.</p>
                            <p>Elevate serves as your trusted tax advisor in the UAE, ensuring that your business navigates the intricate realm of taxes with confidence and proficiency. Our commitment to excellence and unwavering dedication sets us apart as a partner you can rely on for all your tax consultancy needs.</p>
                            <ol>
                                <li>Tax Filling</li>
                                <li>Tax Registration</li>
                                <li>Tax Planning</li>
                                <li>Tax Training</li>
                                <li>Tax Implementation </li>
                            </ol>
                            <h6>
                                Maximize your tax savings and minimize risk with our expert tax consultancy services. Contact us now to ensure your business complies with all tax regulations!
                            </h6>

                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <CorporateForm/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TaxContent
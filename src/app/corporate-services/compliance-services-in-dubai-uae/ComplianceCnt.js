import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import Image from 'next/image';
import complianceimg1 from './images/compliance-service.jpg';
import complianceimg2 from './images/compliance-service-2.jpg';
import ComplCbcrModal from "./ComplCbcrModal";
import ComplEsrModal from "./ComplEsrModal";
import ComplUboModal from "./ComplUboModal";
import ComplAmlModal from "./ComplAmlModal";
import { BsCheck2Square } from "react-icons/bs";
const ComplianceCnt = () => {
  return (
    <>
    <div className='compl-sev-sec1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12">
                            <h1 className="compl-hd">Your Guide to Compliance Services in UAE </h1>
                            <p>Maintaining a strong ethical culture and implementing effective compliance measures can significantly reduce the risk of incurring legal or regulatory penalties, which can result in significant financial and reputational damage for businesses. As regulatory requirements for compliance continue to grow, including the need for policies, anti-money laundering frameworks, and skilled talent, it has become increasingly crucial for organizations to prioritize building a robust compliance infrastructure.Prioritizing a robust compliance infrastructure, coupled with the expertise of Compliance Services in Dubai, UAE, is essential in mitigating the risk of facing legal or regulatory penalties.  This proactive approach not only safeguards businesses from potential financial and reputational damage but also ensures adherence to evolving compliance requirements, encompassing policies, anti-money laundering frameworks, and skilled talent, as regulatory demands continue to expand.</p>
                        </div>
                        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12">
                            <Image src={complianceimg1} alt="compliance services in dubai uae" data-aos="fade-left" className="compl-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="compl-serv-sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
                            <Image src={complianceimg2} alt="compliance services in dubai uae" data-aos="fade-right" className="compl-img"/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
                            <h2 className="compl-hd">What is Business Compliance Services?</h2>
                            <p>Compliance in business involves adhering to legal requirements to ensure that all operations are conducted in accordance with the law. It involves being knowledgeable about applicable laws and regulations and taking appropriate measures to ensure compliance.</p>
                            <h2 className="compl-hd">When considering a compliance expert in Dubai, it is essential to ask certain critical questions, such as:</h2>
                            <ul className="compliance-ul">
                                <li><BsCheck2Square/> What specific compliance services do you provide?</li>
                                <li><BsCheck2Square/> How well-versed are you in UAE laws and regulations?</li>
                                <li><BsCheck2Square/> How frequently do you communicate updates regarding legal changes to your clients?</li>
                                <li><BsCheck2Square/> Can you share any past examples of successful client cases or stories that demonstrate your expertise?</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="compl-serv-sec3">
                <div className="container">
                    <h2 className="compl-hd">Our premium Compliance Services in UAE:-</h2>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12">
                            <div className="compl-sec3-box">
                                <h5>Country-by-Country Reporting </h5>
                                <p>Country-by-Country Reporting (CbCR) is a requirement established by the OECD's Base Erosion and Profit Shifting (BEPS) Action 13. </p>
                                <ComplCbcrModal/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12">
                            <div className="compl-sec3-box">
                                <h5>Economic Substance Reporting(ESR)</h5>
                                <p>ESR  aim to ensure that businesses engaged in specific activities meet regulatory needs to combat tax evasion and improper tax practices . </p>
                                <ComplEsrModal/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12">
                            <div className="compl-sec3-box">
                                <h5>Ultimate Beneficial Owner(UBO)</h5>
                                <p>The Ultimate Beneficial Owner (UBO) in the UAE refers to the individual or entity holding the ultimate control and ownership of a company. </p>
                                <ComplUboModal/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12">
                            <div className="compl-sec3-box">
                                <h5>Anti Money Laundering Compliance(AML)</h5>
                                <p>AML measures in the UAE are crucial safeguards against financial crimes, designed to detect and prevent money laundering activities .</p>
                                <ComplAmlModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="compl-sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12">
                            <h2 className="compl-hd">Choose Elevate for Compliance Services in UAE</h2>
                            <p>Our expertise lies in simplifying the intricate UAE laws and regulations, ensuring you navigate them seamlessly. With our support, you'll stay well-informed about any legal updates, safeguarding your business from unexpected disruptions and compliance challenges. Trust us to be your dedicated partner in maintaining regulatory adherence and peace of mind.</p>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12">
                            <CorporateForm/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ComplianceCnt
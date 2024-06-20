import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import compformdocimg from '../../../../public/icons/corporate-icons/documents.png';
import cmpformimg from './images/company-formation-uae.jpg';
import Image from 'next/image';
import { IoMdCheckboxOutline } from "react-icons/io";
import ComForDocModal from "./ComForDocModal";
import { BsCheck2Square } from "react-icons/bs";
const CompanyFormationCnt = () => {
  return (
    <>
    <div className="cmp-form-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="comp-form-hd">Company Formation in Dubai: Your Path to Success</h1>
                            <p>Investing in a company set up in the UAE presents a promising business opportunity. Establishing a Dubai-based company is a proactive decision for investors, given the UAE's 100% foreign ownership policy, favorable tax environment, business-friendly atmosphere, robust infrastructure, and efficient e-government system. Dubai, in particular, offers an enticing package for those looking to start a business, with its exceptional services, iconic structures, and cutting-edge technology making it a top choice for foreign investors.</p>
                            <p>Elevate stands as a premier provider of comprehensive business setup services in Dubai and the UAE, catering to startups, medium-sized enterprises, and large corporations. Our hallmark is the fusion of trust and quality in our business setup solutions, which goes beyond mere marketing rhetoric. Elevate's services cover all aspects of business setup, from Mainland to Free Zone and Offshore business registration, licensing, license renewals, and more. We measure our success by the growth and prosperity of our clients, which remains our ultimate reward.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={cmpformimg} className="cmp-form-img-top" alt="uae-company-formation" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cmp-form-sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="comp-form-hd">Unlocking Opportunities in Dubai: Key Business Advantages</h2>
                            <div className="cmp-form-chk-box-main">
                                <div className="cmp-form-chk-box-icn">
                                    <IoMdCheckboxOutline />
                                </div>
                                <div className="cmp-form-chk-box-cnt">
                                    <h6>100% Foreign Ownership :</h6>
                                    <p>Dubai allows full foreign ownership of companies, providing investors with control and flexibility.</p>
                                </div>
                            </div>
                            <div className="cmp-form-chk-box-main">
                                <div className="cmp-form-chk-box-icn">
                                    <IoMdCheckboxOutline />
                                </div>
                                <div className="cmp-form-chk-box-cnt">
                                    <h6>Tax Advantages :</h6>
                                    <p>The UAE offers reduced taxes and no personal income tax, increasing profitability.</p>
                                </div>
                            </div>
                            <div className="cmp-form-chk-box-main">
                                <div className="cmp-form-chk-box-icn">
                                    <IoMdCheckboxOutline />
                                </div>
                                <div className="cmp-form-chk-box-cnt">
                                    <h6>Ease of Doing Business :</h6>
                                    <p>Dubai's streamlined processes and business-friendly environment make setup and operations efficient.</p>
                                </div>
                            </div>
                            <div className="cmp-form-chk-box-main">
                                <div className="cmp-form-chk-box-icn">
                                    <IoMdCheckboxOutline />
                                </div>
                                <div className="cmp-form-chk-box-cnt">
                                    <h6>World-Class Infrastructure :</h6>
                                    <p>Dubai boasts modern infrastructure, enhancing operational capabilities and attracting global talent.</p>
                                </div>
                            </div>
                            <div className="cmp-form-chk-box-main">
                                <div className="cmp-form-chk-box-icn">
                                    <IoMdCheckboxOutline />
                                </div>
                                <div className="cmp-form-chk-box-cnt">
                                    <h6>Strategic Location :</h6>
                                    <p>Situated at the crossroads of Europe, Asia, and Africa, Dubai offers access to diverse markets, boosting business opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="comp-form-doc-main-box-lay">
                                <h2 className="comp-form-hd">Documents Required for Company Formation in Dubai, UAE</h2>
                                <div className="com-doc-req-box">
                                    <Image src={compformdocimg} />
                                    <ComForDocModal/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12"></div>
                    </div>
                </div>
            </div>

            <div className="cmp-form-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <div className="cmp-form-ftr-lft-sec">
                                <h2>Choose Elevate as your Business setup consultant in Dubai,UAE</h2>
                                <p>Elevate offers complete services to facilitate your business setup in Dubai. From helping you choose the right business to providing VISA assistance, and expert accounting and auditing assistance, we are your trusted business setup consultant for a successful business establishment in Dubai, UAE.</p>
                                <ul className="compny-form-ul">
                                    <li><BsCheck2Square/> Choose the Right Business</li>
                                    <li><BsCheck2Square/> Prepare a detailed business plan</li>
                                    <li><BsCheck2Square/> VISA Assistance</li>
                                    <li><BsCheck2Square/> Office Space Assistance</li>
                                    <li><BsCheck2Square/> Bank Account Opening Assistance</li>
                                    <li><BsCheck2Square/> Complete PRO Assistance</li>
                                    <li><BsCheck2Square/> Accounting & Auditing Assistance</li>
                                </ul>
                            </div>
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

export default CompanyFormationCnt
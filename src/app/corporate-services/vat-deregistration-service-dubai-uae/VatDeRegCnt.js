import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import vatderegimg1 from './images/vat-reg.jpg';
import vatderegimg2 from './images/vat-reg-2.jpg';
import vatderegimg3 from './images/vat-3.jpg';
import Image from 'next/image';
import liabilitiesimg from './icons/liability.png';
import vatreturnimg from './icons/vat-return.png';
import applicationsubmimg from './icons/application-submission.png';
import { BsCheck2Square } from "react-icons/bs";
const VatDeRegCnt = () => {
  return (
    <>
    <div className="vat-de-reg-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="vat-dereg-hd">Streamline Your Business with Expert VAT Deregistration Services in the UAE</h1>
                            <p>Value Added Tax (VAT) is an indirect tax imposed on the supply of goods and services in the United Arab Emirates (UAE). While VAT registration is mandatory for businesses that meet certain turnover thresholds, there are situations where deregistration becomes necessary. When a business in the UAE decides to bid adieu to its VAT registration with the Federal Tax Authority, it embarks on a journey called UAE VAT deregistration or cancellation. However, to secure the FTA's stamp of approval for this departure, the business must navigate legal conditions and substantiate valid reasons for its tax termination.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={vatderegimg1} className="vat-dereg-img" alt="vat deregistration service dubai uae"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vat-de-reg-sec2">
                        <div className="vat-de-reg-sec2-left">
                            {/* <Image src={vatderegimg2} className="vat-dereg-img" alt="vat deregistration service dubai uae"/> */}
                        </div>
                        <div className="vat-de-reg-sec2-right">
                            <h2 className="vat-dereg-hd">VAT Deregistration in UAE</h2>
                            <p>Deregistration of VAT in UAE is primarily conducted online via the FTA portal. However, businesses that have ceased operations are required to obtain a company liquidation letter from government authorities before they can apply for VAT deregistration. To assist businesses with cancelling their VAT services, Elevate provides streamlined VAT deregistration services in Dubai ,UAE. When applying for VAT deregistration, companies must select one of two types of services available for this process.</p>
                            <ul className="vat-dereg-ul">
                                <li><BsCheck2Square/> Mandatory VAT Deregistration</li>
                                <li><BsCheck2Square/> Voluntary VAT Deregistration</li>
                            </ul>
                        </div>
                    
            </div>

            <div className="vat-de-reg-sec3">
                        <div className="vat-de-reg-sec3-left">
                            <h2 className="vat-dereg-hd">When to Deregister for VAT in UAE</h2>
                            <p>VAT deregistration becomes mandatory if you cease conducting business operations or if your taxable turnover falls below the voluntary registration threshold of AED 187,500. Additionally, you can choose to apply for deregistration voluntarily if your taxable turnover exceeds AED 187,500 but is still below the mandatory registration threshold of AED 375,000.</p>
                            <h2 className="vat-dereg-hd">Time Limit for Submitting a VAT Deregistration Application:</h2>
                            <p>To initiate the deregistration process, you must submit the application to the Federal Tax Authority (FTA) within 20 business days from the occurrence of the event that necessitates deregistration, as specified under Article 21 of the VAT Law.</p>
                        </div>
                        <div className="vat-de-reg-sec3-right">
                            {/* <Image src={vatderegimg3} className="vat-dereg-img" alt="vat deregistration service dubai uae"/> */}
                        </div>
                    
            </div>

            
            <div className="vat-de-reg-sec5">
                <div className="container">
                <h2 className="vat-dereg-hd">VAT Deregistration Process</h2>
                    <h6>The process of UAE VAT deregistration involves the following steps:</h6>
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="vat-de-reg-procs-box">
                                <Image src={applicationsubmimg} className="vat-procs-img" alt="vat deregistration service dubai uae"/>
                                <h5>Submitting the Application</h5>
                                <p>Access your online account and accurately complete the VAT deregistration application. Provide the effective date for de-registration and upload all relevant supporting documents.</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="vat-de-reg-procs-box">
                            <Image src={vatreturnimg} className="vat-procs-img" alt="vat deregistration service dubai uae"/>
                                <h5>Final VAT Return</h5>
                                <p>Upon review of the deregistration application, the FTA will notify you to submit your final VAT return. Ensure timely submission as per the instructions provided.</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="vat-de-reg-procs-box">
                            <Image src={liabilitiesimg} className="vat-procs-img" alt="vat deregistration service dubai uae"/>
                                <h5>Settling Liabilities</h5>
                                <p>Settle any outstanding liabilities, including penalties pending for payment, with the FTA. If you are in a credit position, you may also submit a refund application at the time of deregistration.</p>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Final Return</h2>
                            <p>The final tax return represents the last tax period for which you were registered with the FTA. It should be filed and any payable tax should be settled within 28 days from the effective date of de-registration. Failure to adhere to the deadlines may result in penalties and delays in completing the deregistration process.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Who Can Submit the Deregistration Application?</h2>
                            <p>The application for deregistration can be submitted to the FTA by the VAT registrant, a tax agent, or a legal representative.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Late Deregistration and Penalties</h2>
                            <p>Failure to submit the deregistration application within the specified timeframe outlined in the Tax Law may result in a penalty of AED 1,000 for the initial delay, with an additional AED 1,000 penalty per month thereafter, up to a maximum of AED 10,000.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Deregistering VAT TRN from Planet</h2>
                            <p>If you are registered with Planet, a tourist refunds system, it is mandatory to deregister your VAT TRN from Planet as part of the VAT deregistration process.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Application Submission and VAT Deregistration Certificate</h2>
                            <p>Once you submit your deregistration application to the FTA, it undergoes a review process. The FTA may request additional information if needed. Upon completion of the review, the FTA will either approve or reject the application and notify you via email. Following approval, your VAT Registration Number (TRN) will be deregistered, and you can download your VAT deregistration certificate from your EmaraTax account.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Filing Returns during the Application Review</h2>
                            <p>During the review of your deregistration application with the FTA, it is essential to continue filing all VAT returns within the prescribed due dates. This obligation remains in effect until the deregistration process is finalized and the final return is generated.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Estimated Time for Deregistration Processing</h2>
                            <p>In general, the FTA aims to complete the deregistration application within 20 business days from the date of receiving the completed application. However, additional processing time may be required if further information is needed.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Deactivation of EmaraTax Account</h2>
                            <p>Deregistering for VAT does not result in the deactivation of your EmaraTax account. The account remains accessible, but the status for VAT registration will be updated to reflect the deregistration.</p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">Documents required for VAT deregistration in UAE</h2>
                            <ul className="vat-dereg-ul">
                                <li><BsCheck2Square/> Revoked trade license documentation, dissolution notice, and Board resolution records.</li>
                                <li><BsCheck2Square/> Latest financial statement for the enterprise - options include Trial Balance, Profit and Loss statement, or Balance Sheet (either Audited or Unaudited).</li>
                                <li><BsCheck2Square/> Correspondence from the Ministry of Labour regarding staff headcount.</li>
                                <li><BsCheck2Square/> Original and revised sales agreements or permits.</li>
                                <li><BsCheck2Square/> Modified company establishment agreement.</li>
                                <li><BsCheck2Square/> Template illustrating financial turnover (taxable revenue and expenses) from the date of initial registration.</li>
                                <li><BsCheck2Square/> Ministry of Labour letter certifying current employee count.</li>
                                <li><BsCheck2Square/> Verification of business activity cessation, if applicable.</li>
                                <li><BsCheck2Square/> Diagram delineating business route, suppliers, and importers.</li>
                                <li><BsCheck2Square/> Exemplar invoices.</li>
                                <li><BsCheck2Square/> Duplicate Tax Registration Number (TRN) documentation.</li>
                                <li><BsCheck2Square/> Formal letter confirming utilization of the TRN.</li>
                                <li><BsCheck2Square/> TRN Certificate for parent company operations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vat-de-reg-sec6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="vat-dereg-hd">How Elevate can help you?</h2>
                            <p>While the process of VAT deregistration may seem simple, having a comprehensive VAT deregistration guide can be instrumental,it can become time-consuming due to the specific requirements set by the Tax Authority that must be carefully met based on the unique circumstances of each case. Failure to meet these requirements or submit necessary documents within the deadlines imposed by the Authority can result in application rejection and the imposition of penalties. Elevate offers professional VAT Deregistration services in the UAE, ensuring compliance with Emirati VAT regulations. Starting from the beginning, Elevate carefully examines your business operations and assesses the potential for deregistration, streamlining the process for you.</p>
                            <p>Recognizing the significance and necessity of VAT services for all business entities within the UAE, we provide an extensive array of VAT-related solutions in Dubai. Our offerings encompass:</p>
                            <ul className="vat-dereg-ul">
                                <li><BsCheck2Square/> VAT Training</li>
                                <li><BsCheck2Square/> VAT Registration</li>
                                <li><BsCheck2Square/> VAT Deregistration</li>
                                <li><BsCheck2Square/> VAT Compliance and Oversight</li>
                                <li><BsCheck2Square/> VAT Filing and Remittance</li>
                                <li><BsCheck2Square/> Assessing Vat's Impact on Company Cash Flow</li>
                            </ul>
                            <h6>Ready to simplify your VAT Deregistration process in the UAE? Contact Elevate today to ensure compliance and avoid penalties.</h6>
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

export default VatDeRegCnt
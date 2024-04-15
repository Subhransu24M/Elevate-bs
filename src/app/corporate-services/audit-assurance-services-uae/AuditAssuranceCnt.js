import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import Image from 'next/image';
import approvedzome1 from './images/1.png';
import approvedzome2 from './images/2.png';
import approvedzome3 from './images/3.png';
import approvedzome4 from './images/4.png';
import approvedzome5 from './images/5.png';
import approvedzome6 from './images/6.png';
import auditassuranceimg from './images/audit-assurance.jpg';
import { BsCheck2Square } from "react-icons/bs";
const AuditAssurancecnt = () => {
  return (
    <>
    <div className="aud-ass-sec1">
                <div className="container">
                    <h1 className="audt-assr-hd">Trustworthy Audit and Assurance Services in UAE for Your Business</h1>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <p>Every business requires Audit and Assurance Services as a core service to effectively monitor their financial transactions. Elevate offers comprehensive Audit and Assurance Services in the UAE that go beyond mere inspection and approval of financial records. Our Audit Services in UAE are designed to provide transparent and systematic financial statement audits, along with other assurance services, that offer valuable insights into your business. With our expertise, you can track your financial transactions with ease and confidence. Businesses require auditors who possess a deep understanding of their specific industry, geographical context, political and economic dynamics, long-term strategic goals, and the potential risks that necessitate evaluation and mitigation. They seek advisors who can adeptly leverage this critical information to conduct audits with the highest degree of accuracy and efficiency.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={auditassuranceimg} className="audt-assr-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="aud-ass-sec2">
                <div className="container">
                    <h2 className="audt-assr-hd">What is Audit & Assurance service?</h2>
                    <p>Audit and Assurance involve analyzing a company's accounts and verifying the data in its financial statements using supporting documents. This process also includes identifying the risks associated with the company's business operations within its industry and market. In Dubai, UAE, auditors and audit firms examine the financial processes and strategies of companies to improve the quality and performance of their auditing processes.</p>
                    <h2 className="audt-assr-hd">Top Audit Firm in UAE: Delivering Excellence in Financial Assurance</h2>
                    <div className="row">

                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>External Audit</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">External Audit</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>An external audit, also known as an independent audit or financial audit, is conducted by external auditors who are not part of the organization.</li>
                                                        <li>Its primary objective is to provide an independent and objective assessment of a company's financial statements to ensure they are accurate, reliable, and in compliance with accounting standards and regulations.</li>
                                                        <li>External audits are typically required for regulatory compliance, shareholder confidence, and to provide assurance to external stakeholders such as investors, creditors, and government authorities.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>Internal Audit</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong2">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">Internal Audit</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>Internal audit is conducted by an organization's internal audit department or outsourced to a third-party firm.</li>
                                                        <li>It focuses on evaluating and improving the internal controls, risk management processes, and operational efficiency of the organization.</li>
                                                        <li>The goal of internal audits is to identify areas where processes can be optimized, risks mitigated, and compliance with company policies and procedures ensured.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>Inventory/Stock Audit</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong3">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">Inventory/Stock Audit</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>Inventory or stock audit is specifically concerned with verifying the accuracy and valuation of a company's inventory or stock holdings.</li>
                                                        <li>It ensures that physical stock levels match the records, assesses the condition of inventory, and verifies the adequacy of inventory valuation methods.</li>
                                                        <li>This audit is critical for businesses with significant inventory, as errors in inventory management can have a substantial impact on financial statements.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>Revenue Audit</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong4">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">Revenue Audit</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>A revenue audit focuses on examining a company's revenue recognition practices to ensure that they comply with accounting standards and regulations.</li>
                                                        <li>It verifies the accuracy of reported revenue, assesses the appropriateness of revenue recognition methods, and identifies potential revenue leakage or fraud.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>Due Diligence Services</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong5">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">Due Diligence Services</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                    
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>Due diligence services are typically performed during mergers, acquisitions, or investment transactions.</li>
                                                        <li>They involve a comprehensive examination of a target company's financial, operational, and legal aspects to assess its overall health and potential risks.</li>
                                                        <li>Due diligence helps prospective buyers or investors make informed decisions and understand the value and liabilities associated with the target entity.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-2 col-lg-2 col-sm-12 col-xs-12 pl-0 pr-0">
                            <div className="aud-ass-sec2-box">
                                <h6>Forensic Audit</h6>
                                {/* Modal Starts */}

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong6">
                                    Learn More
                                </button>

                                <div className="modal fade" id="exampleModalLong6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title aud-mdl-tlt" id="exampleModalLongTitle">Forensic Audit</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                    
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="aud-ass-modal-bdy">
                                                    <ul>
                                                        <li>Forensic audit is an investigative audit conducted to uncover and document financial fraud, irregularities, or misconduct within an organization.</li>
                                                        <li>It involves collecting and analyzing evidence, tracing financial transactions, and identifying the parties involved in fraudulent activities.</li>
                                                        <li>Forensic audits are often used in legal proceedings and can be crucial in uncovering financial wrongdoing.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal Ends */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aud-ass-sec3">
                <div className="container">
                    <h2 className="audt-assr-hd">We are Approved Auditors both in the Mainland and following Freezones</h2>
                    <div className="row">
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                            <Image src={approvedzome1} className="audt-assr-zone-img" />
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                        <Image src={approvedzome2} className="audt-assr-zone-img"/>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                        <Image src={approvedzome3} className="audt-assr-zone-img"/>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                        <Image src={approvedzome4} className="audt-assr-zone-img"/>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                        <Image src={approvedzome5} className="audt-assr-zone-img"/>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
                        <Image src={approvedzome6} className="audt-assr-zone-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aud-ass-sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="audt-assr-hd">Why Choose Elevate Auditors in UAE for Your Audit Needs?</h2>
                            <p>Elevate Auditing is one of the best audit firms in Dubai and UAE, with a team of top auditors. We provide a complete range of audit and assurance services to help companies achieve their business objectives by gaining insight into their organizational structure and internal processes.</p>
                            <p>Team Elevate Auditing delivers independent, objective, and high-quality auditing services in UAE.</p>
                            <ul>
                                <li><BsCheck2Square/> Expert team of auditors</li>
                                <li><BsCheck2Square/> Time-bound Audits</li>
                                <li><BsCheck2Square/> Compliance with the industry's best practices and standards</li>
                                <li><BsCheck2Square/> Affordable Professional Charges</li>
                            </ul>
                            <h6>Take control of your financial management with Elevate's expert Audit & Assurance services in UAE. Contact us today to learn more!</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <CorporateForm/>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default AuditAssurancecnt
import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import Image from 'next/image';
import cmpliquidationimg from './images/company-liquidation.jpg';
import Liquidationmodal from "./Liquidationmodal";
import Liquidationmodal2 from "./Liquidationmodal2";
import { BsCheck2Square } from "react-icons/bs";
const CompanyLiquidation = () => {
  return (
    <>
      <div className="lquid-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="lqd-hd">Expert Company Liquidation Services in Dubai, UAE</h1>
                            <p>The company liquidation process in UAE, dissolution, or de-registration of a company involves the cessation of its business operations, settlement of outstanding debts to creditors, and distribution of remaining assets to its owners or shareholders. In Dubai, UAE, there are regulatory requirements that ensure all stakeholders are taken into account during the winding-up process. This involves a detailed legal procedure to ensure fairness and transparency in the distribution of assets and liabilities.</p>
                            <p>Elevate provides Company Liquidation services in Dubai ,UAE, which includes the preparation of a Liquidator's report, also referred to as a No Liability Letter or Liquidator's Letter, by a Professional Auditor. To initiate the Company Closure process, we issue an Appointment of Liquidator's Letter to notify the licensing authority, followed by a Final Liquidator's report after conducting a thorough investigation of all potential liabilities of the company.We are dedicated to ensuring a smooth and compliant company liquidation process in Dubai, UAE.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={cmpliquidationimg} className="lqdimg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lquid-sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className="lqd-hd">What is Company Liquidation?</h2>
                            <p>Liquidation refers to a legal process of formally ending a company's operations, often referred to as 'winding up' or 'closing down'. During liquidation, the company's assets are sold off and the resulting funds are utilized to pay off debts, settle expenses, and distribute any remaining proceeds among the company's shareholders. This process is a form of insolvency procedure and is typically undertaken when a company is no longer able to sustain its operations or meet its financial obligations.</p>
                            <h2 className="lqd-hd">Types of Company Liquidation in Dubai, UAE:</h2>
                            <p>According to the UAE Company law, there are two distinct methods of liquidation that can be followed, each with its own set of requirements and procedures.</p>

                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                                    <div className="lqd-box">
                                        <h5>Voluntary Liquidation</h5>
                                        <Liquidationmodal/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                                    <div className="lqd-box">
                                        <h5>Compulsory Liquidation:</h5>
                                        <Liquidationmodal2/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className="lqd-hd">Documents required for Company Liquidation in Dubai,UAE</h2>
                            <ul className="comp-lqd-ul">
                                <li><BsCheck2Square/> Copy of your business license. If your business license has expired, you will have to get it renewed before you can begin the process</li>
                                <li><BsCheck2Square/> AOA/MOA (Memorandum of Association) with a copy of any changes that have been made</li>
                                <li><BsCheck2Square/> Share Certificate</li>
                                <li><BsCheck2Square/> Power of Attorney (if the owner/shareholders are outside the country)</li>
                                <li><BsCheck2Square/> Copies of all shareholder’s passports</li>
                                <li><BsCheck2Square/> Copies of emirates ID</li>
                                <li><BsCheck2Square/> Shareholders’ Resolution</li>
                                <li><BsCheck2Square/> Deregistration application form </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lquid-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="lqd-hd">As a Liquidator Elevate’s Projected Role is to</h2>
                            <p>Having extensive experience as both an Auditor and Company Liquidator in Dubai, UAE, we possess in-depth knowledge of the financial connections of companies across various domains. Elevate has successfully liquidated numerous types of companies, including Limited Liability Companies, Free Zone Companies, and Offshore Companies.
                            </p>
                            <ul className="comp-lqd-ul">
                                <li><BsCheck2Square/> Drafting the Board Resolution</li>
                                <li><BsCheck2Square/> Publishing Advertisement in English and Arabic News Paper</li>
                                <li><BsCheck2Square/> Settling with Employees</li>
                                <li><BsCheck2Square/> Settling with the Debtors/suppliers</li>
                                <li><BsCheck2Square/> Visa Cancellation</li>
                                <li><BsCheck2Square/> Bank Account Closing</li>
                                <li><BsCheck2Square/> Obtaining NOC from Dewa, NOC from Local Telecom Company</li>
                                <li><BsCheck2Square/> Registered Tenancy Agreement Cancellation</li>
                                <li><BsCheck2Square/> De-register with FTA</li>
                                <li><BsCheck2Square/> Preparation of the Liquidator’s Report</li>
                                <li><BsCheck2Square/> Submission of the final Report to the Authority to get the De-Registration Certificate</li>
                            </ul>
                            <h5>Take the first step towards a hassle-free company closure in UAE - contact Elevate for expert Liquidation services!</h5>
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

export default CompanyLiquidation
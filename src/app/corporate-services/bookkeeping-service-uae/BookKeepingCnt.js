import CorporateForm from '@/app/components/CorporateForm/CorporateForm';
import bookkeepingimgleft from './images/bookeeping-service.png';
import bookkeepingimguae from './images/bookkeeping-service-uae.jpg';
import Image from 'next/image';
import BookKeepingAccord from './BookKeepingAccord';
import { BsCheck2Square } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from 'next/link';

const BookKeepingCnt = () => {
  return (
    <>
    <div className="bk-kp-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className='bkp-hd'>Expert Bookkeeping Services in Dubai,UAE</h1>
                            <p>Bookkeeping is an integral component of the accounting process within businesses, involving the meticulous recording of financial transactions. Elevate is one of the renowned Bookkeeping firms in dubai for providing the most dependable bookkeeping services in the UAE. They assist in maintaining precise records of financial transactions, facilitating efficient accounting and tax preparation while adhering to UAE's tax regulations. Beyond merely documenting payables and receivables, Elevate ensures the security and prosperity of your business through accurate bookkeeping and comprehensive accounts management. As one of the foremost Bookkeeping service provider in Dubai, UAE, Elevate excels in delivering exceptional accounting and bookkeeping services, diligently tracking day-to-day business transactions.</p>
                            <div className='bkp-hd-btnblk'>
                                <Link href="/contact-us">Contact us <CiLocationArrow1 />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={bookkeepingimguae} className="bkp-rgt-img" alt="bookkeeping service uae"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bk-kp-sec2">
                
                        <div className="bk-kp-sec2-left">
                            <Image src={bookkeepingimgleft} className="bkp-lft-img" alt="bookkeeping service uae"/>
                        </div>
                        <div className="bk-kp-sec2-right">
                            <h2 className='bkp-hd'>What is Bookkeeping?</h2>
                            <p>Bookkeeping is the systematic process of recording, organizing, and maintaining financial transactions and records of a business or organization. It involves documenting all financial activities, such as income, expenses, purchases, and sales, in a structured and chronological manner.</p>
                            <h4>Key aspects of Bookkeeping include</h4>
                            <ul className='bookkeep-ul'>
                                <li><BsCheck2Square/> Recording Transactions</li>
                                <li><BsCheck2Square/> Organization</li>
                                <li><BsCheck2Square/> Double-Entry System</li>
                                <li><BsCheck2Square/> Balancing Accounts</li>
                                <li><BsCheck2Square/> Financial Reporting</li>
                                <li><BsCheck2Square/> Compliance</li>
                                <li><BsCheck2Square/> Decision Making</li>
                            </ul>
                            <p>Bookkeeping is a fundamental aspect of accounting, serving as the foundation upon which more complex financial analysis and reporting are built. It ensures that a company's financial records are accurate, transparent, and up-to-date, which is essential for both internal management and external stakeholders, such as investors, creditors, and tax authorities.</p>
                        </div>
                    
            </div>

            <div className="bk-kp-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className='bkp-hd'>Benefits of Outsourcing Bookkeeping Services in Dubai, UAE</h2>
                            <BookKeepingAccord/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className='bkp-hd'>Streamlining your bookkeeping for maximum efficiency</h2>
                            <p>Elevate, a prominent Bookkeeping service provider in Dubai, UAE, delivers exceptional and punctual bookkeeping support that operates seamlessly behind the scenes, allowing you to prioritize your core business activities. With our seasoned team of bookkeeping experts, we handle essential tasks like data entry and bank reconciliations with precision. Our top-tier bookkeeping services in Dubai, UAE are a testament to our commitment to excellence.</p>
                            <p>Recognizing the advantages of outsourcing, businesses registered in DIFC, Dubai Mainland, and DMCC have chosen Elevate as their trusted partner for outsourcing their bookkeeping responsibilities.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bk-kp-sec4">
                
                        <div className="bk-kp-sec4-left">
                            <h2 className='bkp-hd'>Why Outsource Bookkeeping to Elevate Team?</h2>
                            <p>From fundamental to advanced bookkeeping services, we extend equal care and consideration to all our clients, ensuring that they receive the best accounting and bookkeeping services in Dubai, UAE.</p>
                            <ul className='bookkeep-ul'>
                                <li><BsCheck2Square/> Value-added Bookkeeping Services</li>
                                <li><BsCheck2Square/> Accuracy in Reporting</li>
                                <li><BsCheck2Square/> Professional approach toward Reports</li>
                                <li><BsCheck2Square/> Stick to finishing the work on deadlines</li>
                                <li><BsCheck2Square/> Cross-monitoring and finalization by a professional Chartered Accountant</li>
                            </ul>
                            <div className="bk-kp-rw2">
                                <h2 className='bkp-hd'>What we do?</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-xl-6 col-xm-12 col-xs-12">
                                    <ul className='bookkeep-ul'>
                                        <li><BsCheck2Square/> Preparing Financial Statements.</li>
                                        <li><BsCheck2Square/> Managing Cost.</li>
                                        <li><BsCheck2Square/> Invoicing.</li>
                                        <li><BsCheck2Square/> Computerized accounting system analysis and installation.</li>
                                        <li><BsCheck2Square/> Budgeting & Financial Forecasting.</li>
                                        <li><BsCheck2Square/> Managing Accounts Receivable.</li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-6 col-xm-12 col-xs-12">
                                    <ul className='bookkeep-ul'>
                                        <li><BsCheck2Square/> Managing Accounts Payables.</li>
                                        <li><BsCheck2Square/> Verification and valuation of inventory.</li>
                                        <li><BsCheck2Square/> Preparation of monthly bank reconciliation statements.</li>
                                        <li><BsCheck2Square/> Payroll Processing.</li>
                                        <li><BsCheck2Square/> Banking and Credit card reconciliation.</li>
                                        <li><BsCheck2Square/> Supervision & review of financial accounting records.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bk-kp-sec4-right">
                            <div className="bkp-frm-blk">
                                <CorporateForm/>
                            </div>

                        </div>
                    
            </div>
            <div className="bank-accnt-opn-boc-lay-4 pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
                            <h2 className="bkp-ftr-tlt">Don't let bookkeeping hold you back, let us help you reach your financial goals </h2>
                            <p className="bkp-ftr-cnt">Bookkeeping is rarely one-size-fits-all. No matter your business situation or how far behind your books are, we can handle any amount of retroactive bookkeeping.</p>
                            <h4>Speak to our expert who can assist you with the process of Bookkeeping Services in the UAE. </h4>
                            {/* <div className="bank-acnt-cnt-us-blk">
                                <div className="bnk-acnt-opn-cta"><Startcontact /></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BookKeepingCnt
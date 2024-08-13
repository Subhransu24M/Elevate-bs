import Link from 'next/link';
import Image from 'next/image';

import cfoicon from '../../../public/icons/corporate-icons/cfo.png';
import investiment from '../../../public/icons/corporate-icons/investiment.png';
import resturant from '../../../public/icons/corporate-icons/resturant.png';
import fund from '../../../public/icons/corporate-icons/fundrising.png';
import bankaccount from '../../../public/icons/corporate-icons/bankaccount.png';
import tax from '../../../public/icons/corporate-icons/tax.png';
import capital from '../../../public/icons/corporate-icons/capital.png';
import bankloan from '../../../public/icons/corporate-icons/bankloan.png';
import localpartner from '../../../public/icons/corporate-icons/localpartner.png';
import complianceservices from '../../../public/icons/corporate-icons/complianceservices.png';
import bookkeeping from '../../../public/icons/corporate-icons/bookkeeping.png';
import middleeastdesk from '../../../public/icons/corporate-icons/middleeastdesk.png';
import gmailicon from '../../../public/icons/corporate-icons/gmail.png';
import chaticon from '../../../public/icons/corporate-icons/chat.png';
import callicon from '../../../public/icons/corporate-icons/call.png';

const CorporateContent = () => {
    return (
        <>
            <div className='business-services-main-blk'>
                <div className='bs-serv-bg-blk'>
                    <div className='container-fluid'>
                        <div className='row bs-ser-row-blk'>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={cfoicon} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>CFO Services - Out Sourced</h4>
                                    <p className='bs-serv-p'>Achieve financial success and stability with Elevate's CFO services, tailored to your business's needs in the UAE.</p>


                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/cfo-services">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>

                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={investiment} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Trademark Registration</h4>
                                    <p className='bs-serv-p'>Elevate helps clients achieve financial goals and maximize returns through its Investment officer services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/trademark-registration-service-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={resturant} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Restaurant Accounting Services</h4>
                                    <p className='bs-serv-p'>Gain valuable insights into your restaurant's financial performance with our accounting experts.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/restaurant-accounting-bookkeeping-service-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={fund} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Fund Raising Services</h4>
                                    <p className='bs-serv-p'>Secure the funding you need to achieve your business goals with Elevate's fundraising services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'>Learn More</button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row bs-ser-row-blk">
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={tax} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Tax Consultancy</h4>
                                    <p className='bs-serv-p'>Maximize your company's profits and minimize your tax burden with Elevate's consultancy services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/best-corporate-tax-consultants-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bankaccount} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Bank Account Opening</h4>
                                    <p className='bs-serv-p'>Elevate helps businesses in the UAE open the right bank account with personalized assistance from our expert team.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/bank-account-opening-in-dubai">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={middleeastdesk} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Middle East Desk</h4>
                                    <p className='bs-serv-p'>Gain valuable insights and access a wide range of resources with Elevate's Middle East desk services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/middle-east-desk-service-london-uk">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={capital} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Capital Arrangement Services</h4>
                                    <p className='bs-serv-p'>Secure the funding you need to grow and succeed with Elevate's capital arrangement services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'>Learn More</button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row bs-ser-row-blk blk-3'>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bankloan} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Bank Loan Arrangement Services</h4>
                                    <p className='bs-serv-p'>Unlock your business's financial potential with Elevate's expert bank loan arrangement services in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/uae-bank-loan-agreement-service">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={localpartner} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Local Partner Arrangement Services</h4>
                                    <p className='bs-serv-p'>We arrange trustable local partner to build the perfect foundation for your business's success in the UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/local-partner-arrangement-service-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={complianceservices} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Compliance Services</h4>
                                    <p className='bs-serv-p'>Our experts will help you navigate the complex landscape of local regulations and ensure your business stays compliant.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/compliance-services-in-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bookkeeping} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Bookkeeping Services</h4>
                                    <p className='bs-serv-p'>Elevate offers professional bookkeeping services in the UAE to help businesses keep accurate financial records.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/bookkeeping-service-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row bs-ser-row-blk blk-3'>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bankloan} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Setting Up A Company </h4>
                                    <p className='bs-serv-p'>Expand your business horizon by incorporating your company in UAE, with our reliable company setup services.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/company-formation-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={localpartner} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Liquidation Services</h4>
                                    <p className='bs-serv-p'>Our team of experts will guide you through the liquidation process and ensure compliance with local laws and regulations.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/company-liquidation-services-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={complianceservices} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>VAT Registration</h4>
                                    <p className='bs-serv-p'>Stay compliant and avoid penalties with our professional VAT registration services in UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/vat-registration-service-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bookkeeping} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>VAT Deregistration</h4>
                                    <p className='bs-serv-p'>Get your business VAT-compliant in UAE with our one-stop-shop VAT deregistration services.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/vat-deregistration-service-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row bs-ser-row-blk blk-3'>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={localpartner} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Visa Assistance</h4>
                                    <p className='bs-serv-p'>Visa Assistance for UAE & Singapore. Get Tourist Visa & Business Visa for 14 Days, 30 Days, 90 Days,etc...</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link href="/corporate-services/visa-assistance">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={localpartner} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Audit & Assurance Services</h4>
                                    <p className='bs-serv-p'>Ensure financial transparency and accountability with our comprehensive Audit & Assurance services in UAE.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/audit-assurance-services-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={complianceservices} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Accounting Implementation</h4>
                                    <p className='bs-serv-p'>Optimize your financial performance with our comprehensive Accounting Implementation services in UAE. </p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/accounting-software-implementation-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bookkeeping} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>ISO Certification</h4>
                                    <p className='bs-serv-p'>Elevate offers ISO Certification in the UAE to help businesses keep accurate financial records.</p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link className="corp-serv-lrn-btn" href="/corporate-services/iso-certification-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row bs-ser-row-blk blk-3'>
                            <div className='col-md-6 col-lg-3 col-lg-3'>
                                <div className='bs-ser-blk'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={localpartner} className="bs-serv-icon" alt="cfo-services-out-sourced" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" />
                                    </div>
                                    <h4 className='bs-serv-tlt'>Freelance Visa</h4>
                                    <p className='bs-serv-p'>Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle. </p>

                                    <div className='btn-blk-row'>
                                        <div className='btn-blk'>
                                            <button className='btn btn-danger bs-serv-btn-clr'><Link href="/corporate-services/freelance-visa-dubai-uae">Learn More</Link></button>
                                        </div>
                                        <div className='action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-3 col-lg-3'></div>
                            <div className='col-md-6 col-lg-3 col-lg-3'></div>
                            <div className='col-md-6 col-lg-3 col-lg-3'></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporateContent
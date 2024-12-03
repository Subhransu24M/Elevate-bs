import CorporateForm from '@/app/components/CorporateForm/CorporateForm'
import Image from 'next/image'
import restaurantimg from './images/restaurant-accounting.jpg';
import ResModal1 from './ResModal1';
import ResModal2 from './ResModal2';
import { FaLongArrowAltRight } from "react-icons/fa";
const RestaurantContent = () => {
    return (
        <>
            <div className="restau-accn-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className='rest-hd1'>Unlock Your Financial Potential with Tailored Restaurant Accounting Services in UAE</h1>
                            <p>The restaurant industry has experienced significant growth in the UAE over the past few decades. With a diverse population, there is a plethora of ethnicities represented in the variety of restaurants available today. Despite the demographic makeup of the UAE, there are numerous options for any type of cuisine from all over the world. Dubai offers excellent facilities and locations to start a restaurant business. </p>
                            <p>Elevate offers top-notch accounting and bookkeeping services for restaurants in Dubai, UAE, whether they are based in free zones or the mainland UAE. Our team of expert accountants and bookkeepers understands the financial needs of your business and can provide tailored solutions to help you succeed. With qualified professionals in accounting and finance, Elevate can assist restaurant and franchise owners in navigating a competitive business environment and achieving their goals.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className='rest-img'>
                                <Image src={restaurantimg} alt="restaurant accounting service uae" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="restau-accn-sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h2 className='rest-hd2'>Financial Reporting Rstaurant Accounting Services, DUBAI</h2>
                            <ul className='rest-ul'>
                                <li><FaLongArrowAltRight className='rest-arrow' />Profit & Loss Statements</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Balance Sheet</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Cash Flow Statement</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />General Ledger</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Inter-Company Accounting</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Fixed Asset Account Management</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="restau-sece-rght-blk">
                                <h4 className="restau-sece-rght-blk-tlt">How Accounting is done for restaurants?</h4>
                                <ResModal1 />
                                <h4 className="restau-sece-rght-blk-tlt">Benefits of outsourcing your accounting services to Elevate</h4>
                                <ResModal2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="restau-accn-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                    </div>
                </div>
            </div>

            <div className="restau-accn-sec4">
                
                    <div className='chos-elv-rest-cnt-tltblk'>
                        <h2 className='rest-hd2'>Choose Elevate for Expert Accounting & Bookkeeping Services for Restaurants in UAE</h2>
                    </div>
                    <div className='chos-elv-rest-cnt-pblk'>
                        <p>By outsourcing your Accounting Services for Restaurants in the UAE to our expert team at ELEVATE, you free up valuable time and energy. With a proven track record of delivering exceptional restaurant accounting services across Dubai and the UAE, our highly qualified professionals go beyond standard solutions, offering tailored and cost-effective strategies to meet your unique needs. At ELEVATE, we specialize in navigating the complexities of restaurant finances, allowing you to focus on the culinary excellence that defines your business. Whether you're starting a new venture or enhancing your current operations, our services are designed to empower your success.</p>
                    </div>

                    <div className="whychos-row">
                        <div className="whychos-left-col">
                            <ul className='rest-ul'>
                                <li><FaLongArrowAltRight className='rest-arrow' />Bookkeeping services</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Accounts payable & Accounts receivable</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Bank account reconciliation</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Managed Payroll</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Value-added tax</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Representation of Financial report to the Management</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Break-even Analysis Report</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Submitting VAT refund forms</li>
                                <li><FaLongArrowAltRight className='rest-arrow' />Any support or guidance related to accounting and vat filing</li>
                            </ul>
                        </div>
                        <div className="whychos-right-col">
                            <div className='whychos-rght-frm-blk'><CorporateForm /></div>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default RestaurantContent
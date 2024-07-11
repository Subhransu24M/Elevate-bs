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
                            <li><FaLongArrowAltRight className='rest-arrow'/>Profit & Loss Statements</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Balance Sheet</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Cash Flow Statement</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>General Ledger</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Inter-Company Accounting</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Fixed Asset Account Management</li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                        <div className="restau-sece-rght-blk">
                        <h4 className="restau-sece-rght-blk-tlt">How Accounting is done for restaurants?</h4>
                        <ResModal1/>
                        <h4 className="restau-sece-rght-blk-tlt">Benefits of outsourcing your accounting services to Elevate</h4>
                        <ResModal2/>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                        <h2 className='rest-hd2'>Choose Elevate for Expert Accounting & Bookkeeping Services for Restaurants in UAE</h2>
                        <p>By opting to outsource your Accounting Services for Restaurants in UAE, to our expert team at ELEVATE, you liberate both your valuable time and energy. Our track record speaks for itself – we've built a solid reputation for delivering unparalleled restaurant accounting services in Dubai and throughout the UAE. Our team of highly qualified professionals is dedicated to surpassing expectations, ensuring that you receive not just standard accounting solutions, but tailored and cost-effective ones.</p>
                        <p>At ELEVATE, our commitment goes beyond conventional accounting. We specialize in providing restaurant accounting services in Dubai, catering to the unique needs of the thriving culinary landscape in the UAE. As a steadfast partner, we assist you in navigating the intricate world of finances, enabling you to focus on the culinary excellence that defines your restaurant. Whether you're starting a new venture or looking to enhance your current operations, our services are designed to empower your success.</p>
                        <ul className='rest-ul'>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Bookkeeping services</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Accounts payable & Accounts receivable</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Bank account reconciliation</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Managed Payroll</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Value-added tax</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Representation of Financial report to the Management</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Break-even Analysis Report</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Submitting VAT refund forms</li>
                            <li><FaLongArrowAltRight className='rest-arrow'/>Any support or guidance related to accounting and vat filing</li>
                        </ul>
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

export default RestaurantContent
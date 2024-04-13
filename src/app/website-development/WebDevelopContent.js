import './websitedevelopment.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
import educationimg from '../../../public/icons/online-learning.png';
import hotelimg from '../../../public/icons/dish.png';
import transportimg from '../../../public/icons/shipped.png';
import healthimg from '../../../public/icons/healthcare.png';
import retailimg from '../../../public/icons/shipped.png';
import fintechimg from '../../../public/icons/fintech.png';
import ecommerceimg from '../../../public/icons/online-shopping (1).png';
import realstateimg from '../../../public/icons/real-state.png';
import WebAccordianLeft from './WebAccordianLeft';
import { WebAccordianRight } from './WebAccordianRight';
import WebFlipbox from './WebFlipbox';
import ItForm from '../components/WebForm/ItForm';
const WebDevelopContent = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12'>
                        <h1 className='web-dev-cmp-tlt'>Leading Website Design and Development Company in London, UK</h1>
                        <h2 className='web-dev-h1'>SECURE A HIGH YIELDING <span className='web-dev-tlt-span'>DIGITAL FUTURE</span> WITH US</h2>

                        <div className='web-dev-quote'>
                            <p className="web-dev-bq"><FaQuoteLeft /> Do you need a new website for your business or want to freshen up the existing one? <br />then we are your one-stop solution for Web Development.<FaQuoteRight /></p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className='row'>
                            <div>
                                <p>Prioritize speed, innovation, and flawless performance? Elevate is your ideal solution.
                                    A dominant Web Design and Development Agency in London, UK, we've honed our skills over almost a decade, excelling in crafting cutting-edge web portals spanning various industries.
                                </p>
                                <p>Covering everything from eCommerce businesses experiencing arithmetic growth, complete with custom web applications, to personal portfolio websites designed to showcase your talents worldwide, our custom web design and development services are tailor-made to unleash your full potential.</p>
                                <p>Our dedicated web development team collaborates closely with businesses—startups, SMBs, and enterprises alike—to construct bespoke technological solutions that bring your vision to life. Whether it's automating and streamlining business operations, launching your digital presence, fostering brand awareness and client engagement, or pursuing any other business objective, our committed web designers and developers are up to the task.</p>
                                <p>Initiate your web development journey with a team of seasoned web developers who specialize in delivering innovative, interactive, and user-friendly web solutions. Elevate: Your partner for turning digital dreams into reality.
                                </p>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        {/* <Webdevlopmentform /> */}
                        <ItForm/>
                    </div>
                </div>

            </div>

            <WebFlipbox/>

            <div className='web-dev-out-row'>
                <h2>Bringing Innovation to Diverse industries</h2>
                <div className='container'>
                    <p>Revolutionizing diverse industries through innovative digital solutions. As a leading Web Design and Development Service Provider in London, we bring cutting-edge creativity to transform businesses across sectors.</p>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={educationimg} />
                                <h5>Education</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={hotelimg} />
                                <h5>Hotels & Restaurants</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={transportimg} />
                                <h5>Transport</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={healthimg} />
                                <h5>Health</h5>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={retailimg} />
                                <h5>Retail</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={fintechimg} />
                                <h5>Fintech</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={ecommerceimg} />
                                <h5>E-commerce</h5>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='web-dev-box'>
                                <Image src={realstateimg} />
                                <h5>Realestate</h5>
                            </div>
                        </div>
                    </div>
                    <div className='web-dev-dream-blk'>
                        <h2>Dreaming of a successful business launch, but don't have a strong web presence?</h2>
                        <p>As a leading Web Development Company in London, we've cultivated a flawless track record, successfully delivering numerous websites and achieving an impressive 100% success rate.</p>
                    </div>
                </div>
            </div>


            <div className='web-dev-accord'>
                <div className='container'>
                <h2>Our Promise to Strengthen Your Digital Footprint</h2>
                <p>Count on us to fortify your digital footprint with our commitment to excellence. As a leading Web Design Agency in London, we are your trusted partner for enhancing online presence.</p>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <WebAccordianLeft />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                            <WebAccordianRight/>
                        </div>
                    </div>
                </div>
            </div>
            


            <div className='web-dev-sec-4'>
                <h2>Considering a fresh look for your website? Want to redesign?</h2>
                <div className='container'>
                    <h4>Visitors to your website just require 0.05 seconds to form an opinion about what they see and experience on a web page</h4>
                    <p>As a leading Web Development Company in London our professional development team works hard to achieve your business objectives by ensuring that your website redesign is optimised for lead generation, digital marketing, and brand exposure. </p>
                    <ul>
                        <li>Improve User experience and ROI</li>
                        <li>Improve SEO & site performance</li>
                        <li>Increase Sales & Conversions</li>
                    </ul>
                </div>
            </div>




        </>
    )
}

export default WebDevelopContent
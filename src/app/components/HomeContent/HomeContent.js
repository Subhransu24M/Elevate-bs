import Image from 'next/image';
import hmabtimg from '../../../../public/images/aboutimg.jpeg';
import trusticon from '../../../../public/icons/trust.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import './homecontent.css';
import DevDigital from './DevDigital';
const HomeContent = () => {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row rw-flex">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                        <div className="hm-abt-img">
                            <Image src={hmabtimg} alt="innovative support system providers" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                        <div className='hm-abt-blk'>
                            <h2>About us</h2>
                            <h3>Thriving on Client Success, Building Trust & Goodwill</h3>
                            <p>Capitalizing on its 15 years of cutting edge expertise inCorporate Services, IT Services & Digital Marketing Elevate Business Solution provides the finest service you can trust on. We have experienced team members giving their hands in enabling the business grow.</p>
                        </div>

                        
                            <div className='row-blk'>
                                <div className='trust-blk'>
                                    <Image src={trusticon} alt="trusted by clients"/>
                                    <h4>We're Trusted</h4>
                                    <h6>by 1K Clients</h6>
                                </div>
                            
                            
                                <div className='hm-abt-list-blk'>
                                    <ul>
                                        <li><FaLongArrowAltRight className="faarrow"/>We perform with full potential</li>
                                        <li><FaLongArrowAltRight className="faarrow"/>With client oriented approach</li>
                                        <li><FaLongArrowAltRight className="faarrow"/>By implementing newest technologies</li>
                                        <li><FaLongArrowAltRight className="faarrow"/>To achieve the ultimate business goal</li>
                                        <li><FaLongArrowAltRight className="faarrow"/>Where company makes all adjusting entries</li>
                                    </ul>
                                </div>
                            </div>
                        

                    </div>
                </div>

            </div>

            <DevDigital />
        </>
    )
}

export default HomeContent
import Image from 'next/image';
import appdev from '../../../public/images/apdev.png'
import iosappimg from '../../../public/icons/ios-app.png';
import andriodappimg from '../../../public/icons/android-app.png';
import reactnativeappimg from '../../../public/icons/react-native-app.png';
import hybridappimg from '../../../public/icons/hybrid-app.png';
import pwaappimg from '../../../public/icons/pwa-app.png';
import flutterappimg from '../../../public/icons/flutter-app.png';
import ItForm from '../components/WebForm/ItForm';
import { FaLongArrowAltRight } from "react-icons/fa";
const AppContent = () => {
    return (
        <>
            <div className='app-sec-01'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
                            <div>
                                <h2>Mobile App Development in the UK</h2>
                                <p>
                                    In today's fast-paced digital landscape, Mobile App Development has emerged as a pivotal force,
                                    revolutionizing the way we interact with technology. From productivity-enhancing tools to
                                    engaging entertainment platforms, mobile apps have become an integral part of our daily lives,
                                    seamlessly connecting us to a world of possibilities at our fingertips. Behind the scenes,
                                    skilled developers from Mobile App Development Companies in the UK, especially the Best Mobile
                                    App Developers in London, harness cutting-edge technologies and innovative frameworks to craft
                                    user-centric applications that cater to diverse needs and preferences. As the demand for mobile
                                    apps continues to soar, these companies and developers play a crucial role in empowering
                                    businesses and individuals alike to stay connected, informed, and entertained in this dynamic
                                    mobile-first era.
                                </p>
                                <div className="app-dev-ul-blk">
                                    <ul className="app-dev-ul">
                                        <li><FaLongArrowAltRight/>10+ years development experience</li>
                                        <li><FaLongArrowAltRight/>100% project on time Delivered</li>
                                        <li><FaLongArrowAltRight/>100% Satisfied Clients </li>
                                        <li><FaLongArrowAltRight/>500+ App delivered successfully</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
                            <Image className="wd-img" src={appdev} alt="Mobile App Development in the UK" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd block */}

            <div className='app-sec-02'>
                <div className="container">
                    <div className="row mt-3">
                        <h2>Diverse Mobile App Development Services in UK</h2>
                        <p>From design and prototyping to deployment and maintenance, your one-stop solution for mobile application development in London.</p>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={iosappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>iOS App Development</h4>
                                <p>Creating mobile applications specifically for Apple's iOS devices, such as iPhones and iPads, using Swift or Objective-C programming languages.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={andriodappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>Android App Development</h4>
                                <p>Designing and building applications for Android devices, leveraging Java or Kotlin as the primary programming languages.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={reactnativeappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>React Native App Development</h4>
                                <p>Building cross-platform mobile apps using React Native framework, which allows developers to write code once and deploy it on both iOS and Android platforms.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={hybridappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>Hybrid App Development</h4>
                                <p>Creating mobile applications specifically for Apple's iOS devices, such as iPhones and iPads, using Swift or Objective-C programming languages.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={pwaappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>PWA Development</h4>
                                <p>Designing and building applications for Android devices, leveraging Java or Kotlin as the primary programming languages.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className='app-dev-grid-blk'>
                                <div className='app-dev-sec2-box-icon'>
                                    <Image src={flutterappimg} className='app-dev-box-icon' alt="Mobile App Development in the UK" />
                                </div>
                                <h4>Flutter App Development</h4>
                                <p>Building cross-platform mobile apps using React Native framework, which allows developers to write code once and deploy it on both iOS and Android platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd block */}
            <div className='app-dev-sec-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-xl-7 col-lg-7 col-sm-12'>
                            <h3>Industries we serve</h3>
                            <p>Delivering customized app development services to diverse industries, the Best Mobile App Developers in London create tailored digital solutions for your business objectives</p>
                            <ul>
                                <li><FaLongArrowAltRight/>E-commerce</li>
                                <li><FaLongArrowAltRight/>Taxi Booking</li>
                                <li><FaLongArrowAltRight/>Food Delivery</li>
                                <li><FaLongArrowAltRight/>Online Training</li>
                                <li><FaLongArrowAltRight/>Insurance</li>
                                <li><FaLongArrowAltRight/>Finance</li>
                            </ul>
                        </div>
                        <div className='col-md-12 col-xl-5 col-lg-5 col-sm-12'>
                            <ItForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppContent
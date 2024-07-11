import webtraffic from './icons/web-traffic.png';
import webinquiry from './icons/inquiry.png';
import webvisit from './icons/web-visit.png';
import searchads from './icons/searchads.png';
import displayads from './icons/displayads.png';
import videoads from './icons/videoads.png';
import shoppingads from './icons/shoppingads.png';
import appads from './icons/appads.png';
import ppcagencylondonimg from './images/ppc-agency-london.jpg';
import Image from 'next/image';
import ItForm from '@/app/components/WebForm/ItForm';
const GoogleAdsCnt = () => {
    return (
        <>
            <div className="googleads-sec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12 pt-5 pb-5">
                            <h1 className='glads-hd'>Trusted PPC Agency in London, UK</h1>
                            <p>Google Ads reaches over 90% of internet users worldwide. Connect with potential customers precisely when they're actively searching for your products or services on Google with the expertise of a Trusted PPC Agency in London, UK. Through the expertise of our Google AdWords specialists, your ads can appear to users at the precise moment they're seeking recommendations on what to do, where to go, or what to buy. Whether users are browsing on their desktop or mobile devices, our strategic ad timing ensures that interested individuals are transformed into valuable customers. Trust in our team to strategically display ads and convert those with intent into valuable customers, regardless of their device.</p>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12 col-xs-12 pt-5 pb-5">
                            <div className="glads-sec1-img-blk">
                                <Image src={ppcagencylondonimg} alt="google ads service london uk"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="googleads-sec-2">
                <div className="container">
                    <h2 className='glads-subhd'>Attain your desired results with a Reputable PPC Agency in London, UK</h2>
                    <div className="row pt-3 pb-3">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">

                            <div className="row pt-3">
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-xs-12 pl-1 pr-1">
                                    <div className="googleads-sec2-box" data-aos="zoom-in" data-aos-duration="3000">
                                        <Image src={webtraffic} alt="google ads service london uk"/>
                                        <h5>Boost Website Traffic</h5>
                                        <p>Elevate your online sales, bookings, or mailing list subscriptions by harnessing the power of online advertisements that lead users directly to your website.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-xs-12 pl-1 pr-1">
                                    <div className="googleads-sec2-box" data-aos="zoom-in" data-aos-duration="3000">
                                        <Image src={webinquiry} alt="google ads service london uk"/>
                                        <h5>Drive More Inquiries</h5>
                                        <p>Boost customer interaction by prominently showcasing your phone number and integrating a convenient click-to-call feature within your ads, resulting in a surge in incoming phone calls.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-xs-12 pl-1 pr-1">
                                    <div className="googleads-sec2-box" data-aos="zoom-in" data-aos-duration="3000">
                                        <Image src={webvisit} alt="google ads service london uk"/>
                                        <h5>Boost Store Visits</h5>
                                        <p>Attract a larger and more diverse customer base to your physical store by leveraging business ads that help individuals easily locate your company on the map.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gads-per-blk">
                                <h2 className='glads-subhd'>Google Ads Performance Metrics</h2>
                                <p>With our expertise as a Trusted PPC Agency in London, UK, we'll navigate your Google Ads investments for maximum results, ensuring every penny drives success.</p>
                                <ul>
                                    <li>Increase in website visitors from Google Ads: 150-200%</li>
                                    <li>Increase in sales within the first 3 months through Google Ads: 30-40%</li>
                                    <li>Increase in website traffic rate through Google Ads: 50-70%</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="glad-frm-blk">
                                <ItForm/>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="glads-sec-4 pt-5 pb-5">
                <div className="container">
                    <h2 className='glads-subhd'>Drive Traffic, Sales, and Conversions with Elevate</h2>
                    <p>Elevate your business with the expertise of one of the leading PPC Marketing Agencies in London, driving targeted traffic, boosting sales, and optimizing conversions for your success.</p>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="glads-box-chk-main-blk" data-aos="fade-right">
                                <div className="glads-box-chk-icon">
                                    <Image src={searchads} className="srch-ad-img" alt="google ads service london uk"/>
                                </div>
                                <div className="glads-box-chk-cnt">
                                    <h6>Search Campaign</h6>
                                    <p>Drive instant traffic targeting searchers actively seeking your products or services. Your text ads appear prominently on search engine results, ensuring high visibility.</p>
                                </div>
                            </div>
                            <div className="glads-box-chk-main-blk" data-aos="fade-right">
                                <div className="glads-box-chk-icon">
                                    <Image src={displayads} className="display-ad-img" alt="google ads service london uk"/>
                                </div>
                                <div className="glads-box-chk-cnt">
                                    <h6>Display Campaign</h6>
                                    <p>Expand your reach across Google Display Network with eye-catching banner or text ads on websites, apps, and YouTube. Boost brand visibility and engage a broad audience.</p>
                                </div>
                            </div>
                            <div className="glads-box-chk-main-blk" data-aos="fade-right">
                                <div className="glads-box-chk-icon">
                                    <Image src={shoppingads} className="shopping-ad-img" alt="google ads service london uk"/>
                                </div>
                                <div className="glads-box-chk-cnt">
                                    <h6>Shopping Campaign</h6>
                                    <p>Ideal for eCommerce, showcase products with appealing images, competitive prices, and compelling descriptions through data feeds. Partner with London's PPC experts for UK market success.</p>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="glads-box-chk-main-blk" data-aos="fade-left">
                                <div className="glads-box-chk-icon">
                                    <Image src={videoads} className="video-ad-img" alt="google ads service london uk"/>
                                </div>
                                <div className="glads-box-chk-cnt">
                                    <h6>Video Campaign</h6>
                                    <p>Captivate your audience with video ads, utilizing formats like skippable, non-skippable, or bumper ads for maximum impact.</p>
                                </div>
                            </div>
                            <div className="glads-box-chk-main-blk" data-aos="fade-left">
                                <div className="glads-box-chk-icon">
                                    <Image src={appads} className="app-ad-img" alt="google ads service london uk"/>
                                </div>
                                <div className="glads-box-chk-cnt">
                                    <h6>App Campaign</h6>
                                    <p>Reach users while they use apps, browse the Play Store, or search on Google. Target specific audiences with app install or engagement ads, driving downloads, registrations, and in-app purchases.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleAdsCnt
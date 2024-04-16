import './dmcard.css';
import Link from 'next/link';
const DmCard = () => {
    return (
        <>
            <div className="Card3-sec">
                <div className="container">
                <h2 className='all-serv-tlt'>Our Digital Marketing Offerings </h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="service-block-three">
                                <div className='inner-box b1'>
                                    <div className="content">
                                        <div className="service-number s1">01</div>
                                        <h4><a href="">SEO</a></h4>
                                        <div className="text">Today it’s not about ‘Get the Traffic’ — it’s about ‘Get the Targeted and Relevant Traffic.</div>
                                        <Link className='more-detail' href="/digital-marketing/seo-service-in-london-uk">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="service-block-three">
                                <div className='inner-box b2'>
                                    <div className="content">
                                        <div className="service-number s2">02</div>
                                        <h4><a href="">Social Media Marketing</a></h4>
                                        <div className="text">Integrating your search and social efforts brings better brand visibility and higher conversion rates.</div>
                                        <Link className='more-detail' href="/digital-marketing/social-media-marketing-service-london-uk">More Details</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="service-block-three">
                                <div className='inner-box b3'>
                                    <div className="content">
                                        <div className="service-number s3">03</div>
                                        <h4><a href="">Google Ads</a></h4>
                                        <div className="text">Improve your conversion rate, traffic and visibility in very short time using the power of Google Ads.</div>
                                        <Link className='more-detail' href="/digital-marketing/google-ads-service-london-uk">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DmCard
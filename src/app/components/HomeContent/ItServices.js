import Link from 'next/link';
import Image from 'next/image';
import webicon from '../../../../public/icons/web-development.png'
import ecomicon from '../../../../public/icons/ecommerce-solutions.png'
import marketingicon from '../../../../public/icons/seo.png'
import appicon from '../../../../public/icons/app-development.png'
import './itservices.css'
const ItServices = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12'  >
                    <div className='hm-it-serv-card-blk' >
                        <h4>Website Development</h4>
                        <p>website is not just a virtual depiction of your company profile rather, it reflects your business objectives and goals</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={webicon} />
                            </div>
                            <div className='it-ser-link'>
                                <Link type="button" href="/website-development" className='btn btn-primary'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12' >
                    <div className='hm-it-serv-card-blk' >
                        <h4>E-Commerce Solutions</h4>
                        <p>e-commerce consulting company helping retailers to launch their business online and grow. For online retail business</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={ecomicon} />
                            </div>
                            <div className='it-ser-link'>
                                <Link type="button" href="/ecommerce-solutions" className='btn btn-primary'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12' >
                    <div className='hm-it-serv-card-blk' >
                        <h4>Digital Marketing</h4>
                        <p>Our strategy drives measurable results. We do 360 degree approach to focus on increasing conversions</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={marketingicon} />
                            </div>
                            <div className='it-ser-link'>
                                <Link type="button" href="/digital-marketing" className='btn btn-primary'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12' >
                    <div className='hm-it-serv-card-blk' >
                        <h4>App Development</h4>
                        <p>We offer customer centric mobile application development services to our clients that fully serve their business needs.</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={appicon} />
                            </div>
                            <div className='it-ser-link'>
                                <Link type="button" href="/app-development" className='btn btn-primary'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItServices
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
                        <p>Transform your brand with our website development services.</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={webicon} alt="website development service uae"/>
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
                        <p>Empower your online retail with our e-commerce solutions.</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={ecomicon} alt="ecommerce solutions uae"/>
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
                        <p>Improve traffic and conversion with our digital marketing solutions</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={marketingicon} alt="digital marketing service uae"/>
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
                        <p>We offer customer centric mobile app development services to our clients that fully serve their business needs.</p>
                        <div className='it-ser-cta'>
                            <div className='it-ser-img'>
                                <Image src={appicon} alt="app development service uae"/>
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
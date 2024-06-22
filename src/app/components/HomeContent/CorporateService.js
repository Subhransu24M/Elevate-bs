import './corporateservice.css';
import Image from 'next/image';
import Link from 'next/link';
import corpimg from '../../../../public/images/corporate.jpg';
import corpicon from '../../../../public/icons/corporate-1.png';
import accicon from '../../../../public/icons/audit.png';
const CorporateService = () => {
    return (
        <>
            <div className='hm-corp-blk' data-aos="fade-up" data-aos-easing="ease-in">
                <div className='hm-corp-bg-clr'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>
                            <div className='hm-cor-hd' >
                                <h2>Dedicated Accounting & Corporate Services</h2>
                                <h4>With personalised support</h4>
                                <p>At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal. We can help you understand your daily business operations and at the same time stay up to date on tax law changes that affect you.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                            <div className='hm-cor-img'>
                                 <Image src={corpimg} /> 
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='hm-acccor-blk'>
                                <div className='hm-cor-icon'>
                                     <Image src={corpicon} /> 
                                </div>
                                <h4>Corporate Services</h4>
                                <p></p>
                                <Link href="/corporate-services" type="button" className="btn btn-danger hm-cor-btn">Read More</Link>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                            <div className='hm-acccor-blk'>
                                <div className='hm-cor-icon'>
                                     <Image src={accicon} /> 
                                </div>
                                <h4>Accounting Services</h4>
                                <p></p>
                                <Link href="https://elevateauditing.com" type="button" className="btn btn-danger hm-cor-btn" target='_blank'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='cor-cta-blk'>
                <div className='container pt-5 pb-5' data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="500">
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>
                            <div className='cor-cta-hd' >
                                <h2>Reduce your audit risk by outsourcing your accounting needs.</h2>
                                <h5>Hire the best accounting specialists to deal with your accounting needs.</h5>
                                <Link href="/contact-us" type='button' className='btn btn-danger cor-cta-btn-lst'>Get Free Consultaion Today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporateService
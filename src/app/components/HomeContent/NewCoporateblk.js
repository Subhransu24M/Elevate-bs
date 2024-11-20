import './newcorporateblk.css';
import Link from 'next/link';
import accounting from './corporate-images/accounting.jpg';
import corporate from './corporate-images/corporate.jpg';
import adgm from './corporate-images/adgm.jpg';
import businesssetup from './corporate-images/business.jpg';
import Image from 'next/image';
import RelatedCorporateservices from './RelatedCorporateservices';

const NewCorporateblk = () => {
    const corporateboxdetails = [
        {
            name: "Accounting Services",
            image: accounting,
            alt: "Accounting Services",
            link: "https://elevateauditing.com/"
        },
        {
            name: "Corporate Services",
            image: corporate,
            alt: "Corporate Services",
            link: "/corporate-services"
        },
        {
            name: "ADGM Services",
            image: adgm,
            alt: "ADGM Company Service Provider",
            link: "/adgm-company-service-provider"
        },
        {
            name: "Business Setup",
            image: businesssetup,
            alt: "Business Setup",
            link: "#"
        }
    ]
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>
                        <div className='hm-cor-hd' >
                            <h2>Dedicated Accounting & Corporate Services</h2>
                            <h4>with personalised support</h4>
                            <p>At Elevate, our team brings in ultimate client satisfaction by enabling them achieving their desired business goal. We can help you understand your daily business operations and at the same time stay up to date on tax law changes that affect you.</p>
                        </div>
                    </div>
                </div>

                <div className='row' >
                    {corporateboxdetails.map((details, index) =>
                        <div className='col-md-3 col-xl-3 col-lg-3 col-sm-12' key={index}>
                            <div className='hm-corp-box-blk'>
                                <div className='hm-corp-imgblk'>
                                    <Image src={details.image} alt={details.alt} />
                                </div>
                                <div className='hm-corp-nameblk'>
                                    <h5>{details.name}</h5>
                                    <div className='hm-corp-linkblk'>
                                        <Link href={details.link}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className='related-tlt'>
                        <h4>Related Services</h4>
                        <RelatedCorporateservices />
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
export default NewCorporateblk
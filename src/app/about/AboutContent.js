import Image from 'next/image';
import abtcntimg from '../../../public/images/about-img.jpg';
import Link from 'next/link';
import './about.css'
const AboutContent = () => {
    return (
        <>
            <div className="abut-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="abt-cnt">
                                <h2>Who we are</h2>
                                <p>Elevate Business Solutions has advanced its approach toward helping entrepreneurs and established business owners. We are not just bringing in the feasibility of managing the registration, compliances, taxes, bookkeeping, and other such core business accounting service, but are nurturing your brand impression with productive IT services as well.</p>

                                <p>For a long time, we have been analysing the problems that new business owners mostly have to go through. People with limited knowledge of accounting and compliances often hesitate to step in and start a business in their desired space. At Elevate, we have now solutions to those hiccups or second thoughts you have for kick-starting your business.</p>

                                <p>Our proficient team of qualified professionals will assist you to start your company right from the scratch. Whether you want to register a firm, sort out your accounting needs, understand the taxes or want to liquidize your company, we can be your one-stop solution!</p>

                                <p>Our consultant or project head will always be in touch with you to set reminders on compliance, tax filings, and other important aspects.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="abt-cnt-img">
                                <Image src={abtcntimg} alt="all about elevate business solutions" />
                            </div>
                            <div className='cmp-profl-blk'>
                            <Link className="cmp-profl-lnk" href="https://cdn.sanity.io/files/kdltfz5q/production/ede6ffeb1a484e012f867df6060912d5e687f88d.pdf" target='_blank'>Check our company profile</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='abt-snd-part-main-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>
                            <div className='hd-cnt'>
                                <h2>Elevate does not only help you register your firm, but also assists you to build a brand out of it!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='abt-lst-cnt'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                            <p>
                                The digital revolution in this world is now accessible and adaptable by all growing businesses. The results are productive and profitability is endless. So, once you get your business registered, our team of IT consultants will guide you with solutions that will help you ELEVATE your brand impression digitally.</p>

                            <p>We develop websites, mobile applications, and Amazon brand stores. Apart from that, we also offer Magento migration, ERP solutions, e-commerce solutions, and digital marketing assistance as a whole IT bundle to our clients. Elevate Business Solutions, understands the importance of online visibility and that is what has convinced us to be available for every digital need your brand has.</p>

                            <p>We have dedicated team members and subject matter experts to take care of different IT departments. We have excellent coders and digital marketers to help you escalate your brand identity to a global extent.
                            </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                            <h4>Our Global Presence</h4>
                            <p>We do not want to abide you by the location for starting up your company and promoting it. We are available across the globe in UAE, Europe, UK, and India to help reach out to all potential entrepreneurs and existing business owners with our auditing, accounting, and IT services. So far, we have helped many clients across the globe from various industries to run businesses that are legally compliant and have digital visibility among their respective target audiences.</p>

                            <p>With our commitment to offering you the best, we await your call to make us part of your dream and give us a chance to be a companion to your growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent
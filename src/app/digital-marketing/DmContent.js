import Image from 'next/image';
import dmimg from '../../../public/images/digital-marketing-agency.jpg';
import ItForm from '../components/WebForm/ItForm';
import DmCard from '../components/DmCard/DmCard';
import dmimgbnr from '../../../public/images/digital-marketing-services.webp';
const DmContent = () => {
    return (
        <>
            <div className='dm-sec1'>
                <div className="container">
                    <div className="row">
                        <h1 className='all-serv-tlt'>Elevate Your Brand with the Leading Digital Marketing Agency in London, UK</h1>
                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
                            <div className='dm-left-blk'>
                                <p>Digital marketing involves harnessing digital technologies, strategies, and platforms to establish connections between enterprises and their current or potential clientele. This dynamic approach facilitates business expansion beyond geographical confines by facilitating precise targeting of specific audience segments. It encompasses a spectrum of online mediums, including websites, blogs, video content, social media, and collaborations, to engage and influence online audiences. Given its perpetually evolving nature, staying abreast of the latest trends is imperative for digital marketers to outpace competitors. As a leading Digital Marketing Agency in London, UK, our commitment revolves around fostering sustainable revenue escalation for your enterprise. </p>
                                <p>The remarkable facet of digital marketing lies in its capability to engage both extensive and niche audience segments without compromising on reach. Unlike conventional marketing methods, the efficacy of digital campaigns can be meticulously measured, encompassing parameters such as revenue, engagement, clicks, and leads. Effective digital marketing is contingent upon its capacity to generate a favorable return on investment. </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
                            <div className='dm-rght-blk'>
                                <Image src={dmimg} className="dmimgcls" alt="digital-marketing-agency-london-uk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd block */}

            <div className='dm-audit-mainblk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12 brd'>
                            <h2 className='dm-snd-tlt'>What Sets Elevate Apart as the Leading Digital Marketing Agency in London, UK?</h2>
                            <ul>
                                <li>With a decade-long industry experience, Elevate excels in the realm of digital marketing.</li>
                                <li>A remarkable track record of 1500+ successful projects underscores our expertise.</li>
                                <li>Our global footprint spans Dubai, UK, USA, and India, reflecting our far-reaching impact.</li>
                                <li>We commit to delivering enhanced ROI through robust online presence, encompassing SEO and SMO strategies.</li>
                                <li>Our team, comprising adept developers and digital marketers, is dedicated to fortifying your brand's identity.</li>
                            </ul>
                            <h2 className='dm-snd-tlt'>Start with a Free Website Audit</h2>
                            <p>Expect to receive your detailed report via email within just two business days, providing valuable insights into your website's SEO, Quality Assurance, Accessibility, and overall health.</p>
                        </div>

                        <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12'>
                            <ItForm />
                        </div>

                    </div>
                </div>
            </div>

            {/* 3rd block */}

            <div className='dm-card-main-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='dm-serv-powerhouse-blk'>
                            {/* <Card3 /> */}
                            <DmCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th block */}
            <div className='dm-frth-blk'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='dmimgbnr'>
                            <Image src={dmimgbnr} alt="digital marketing service in uk" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th block */}

            <div className='dm-serv-advertise-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-xl-12 col-lg-12 dm-serv-advertise-cnt-blk'>
                            <h2 className='all-serv-tlt-h2'>ADVERTISE, ANALYSE, & OPTIMISE !!!</h2>
                            <span className='all-serv-tlt-tag'>We do it all for you. We craft digital marketing that converts.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DmContent
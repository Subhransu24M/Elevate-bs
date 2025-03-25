import Image from 'next/image';
import daimg from '../../../public/images/data-analytics/data-analytics-1.jpg';
import reporting from '../../../public/images/data-analytics/Reporting-tracking.jpg';
import intelligence from '../../../public/images/data-analytics/data-insights-2.png';
import cloudcomputing from '../../../public/images/data-analytics/cloud-computing.jpg';
import performacetracking from '../../../public/images/data-analytics/performance-tracking.jpg';
import datainsightsfrth from '../../../public/images/data-analytics/data-insights.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import './data-analytics.css';

// import { Link } from 'react-router-dom';
const DaContent = () => {
    return (
        <>
            <div className="da-fst-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className='da-fst-left-blk'>
                                <h1>Turn Your Data into Business Growth</h1>
                                <p>Modern accounting and auditing demand intelligent insights. Our Data Analytics Services allow businesses to transform raw data into strategic, actionable decisions. We help you maximize efficiency and growth. As one of the leading data analytics companies in Dubai, we provide data analytics services that flawlessly meet your business needs.</p>
                                <div className='da-cta-btn'>
                                    <a href="/contact-us">Contact us <CiLocationArrow1 className='da-cta-arw' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <Image src={daimg} className='da-fst-img' alt="Data Analytics Service" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Block */}


            <div className='da-snd-blk'>
                <div className='da-snd-blk-bg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 col-lg-4 col-xl-4'>
                                <div className='da-grid-blk'>
                                    <Image src={reporting} alt="Data Analytics Service" />
                                    <h4>Performance Reporting & Tracking</h4>
                                    <p>
                                        Gain real-time visibility into your business performance with consolidated data insights.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4'>
                                <div className='da-grid-blk'>
                                    <Image src={intelligence} alt="Data Analytics Service" />
                                    <h4>Business Intelligence & Visualization</h4>
                                    <p>
                                        Turn complex datasets into intuitive dashboards and reports for smarter decision-making.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4'>
                                <div className='da-grid-blk'>
                                    <Image src={cloudcomputing} alt="Data Analytics Service" />
                                    <h4>Cloud BI Solutions on Microsoft Azure</h4>
                                    <p>
                                        Use the power of cloud computing to scale and optimize your analytics capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Block */}

            <div className='da-cnt-third-block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='trd-blk-left-cnt'>
                                <h2>Performance Reporting and Tracking</h2>
                                <p>Integrate and consolidate data from multiple sources to monitor business performance in real-time with our Data Analytics Consulting Services.</p>
                                <h4>Features</h4>
                                <ul>
                                    <li><FaLongArrowAltRight />
                                        Data Integration: Unify diverse data formats into a single source of truth.</li>
                                    <li><FaLongArrowAltRight />
                                        KPI Definition: Establish clear, strategic metrics to measure performance.</li>
                                    <li><FaLongArrowAltRight />
                                        Interactive Dashboards: Make use of advanced Excel, macros, and custom PPT decks to create dynamic visual reports.</li>
                                </ul>
                                <h4>Value Proposition</h4>
                                <p>Gain complete transparency over your revenue and operations, enabling timely, informed decisions that drive performance.</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <Image src={performacetracking} className="performance-tracking-img" alt="data analytics service" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th Block */}

            <div className='da-cnt-third-block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <Image src={datainsightsfrth} className="performance-tracking-img" alt="data analytics service" />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='trd-blk-left-cnt'>
                                <h2>Business Intelligence & Visualization</h2>
                                <p>Transform raw data into actionable insights with advanced analytics and visualization tools. Our Data Analytics Services in Dubai come with real-time insights that drive smarter decision-making.</p>
                                <h4>Features</h4>
                                <ul>
                                    <li><FaLongArrowAltRight />
                                        Data Aggregation: Seamlessly combine information from various sources for a holistic view.</li>
                                    <li><FaLongArrowAltRight />
                                        Visualization Tools: Utilize cutting-edge solutions such as Alteryx, Tableau, and Qliksense to narrate your data story.</li>
                                    <li><FaLongArrowAltRight />
                                        Automation & ETL: Streamline data workflows through robust automation, ensuring efficiency and accuracy.</li>
                                </ul>
                                <h4>Value Proposition</h4>
                                <p>Uncover hidden patterns and trends that optimize operational planning, improve resource allocation, and support strategic initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th Block */}

            <div className='da-cnt-third-block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                        <div className='trd-blk-left-cnt'>
                                <h2>Cloud BI Solutions on Microsoft Azure</h2>
                                <p>Adopt agile, scalable, and secure analytics solutions with our cloud BI offerings on Microsoft Azure. Data Analytics Solutions enable businesses to manage and analyze data efficiently in a secure cloud environment.</p>
                                <h4>Features</h4>
                                <ul>
                                    <li><FaLongArrowAltRight />
                                        Flexible Storage: Usage of VM-attached, object, and shared file storage for robust data management.</li>
                                    <li><FaLongArrowAltRight />
                                        Integrated Data Management: Blend on-premises and cloud data seamlessly, with comprehensive backup and archival.</li>
                                    <li><FaLongArrowAltRight />
                                        Automation & Security: Implement automated data cleansing, protection, and replication processes to protect your information.</li>
                                </ul>
                                <h4>Value Proposition</h4>
                                <p>Accelerate your analytics implementation, reduce IT overhead, and ensure a secure and scalable data environment that adapts to your evolving business needs.</p>
                            </div>
                            
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                        <Image src={cloudcomputing} className="performance-tracking-img" alt="data analytics service" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 6th Block */}

            <div className='da-sixth-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12'>
                            <p>
                            Our integrated approach—built on Performance Reporting, Business Intelligence, and Cloud BI Solutions - enables transparent, efficient, and data-driven decision-making across your organization.
                            </p>
                            <p>Want to make better business decisions? Get in touch with our team at Elevate today for a custom Data Analytics Consulting Services session/demo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DaContent
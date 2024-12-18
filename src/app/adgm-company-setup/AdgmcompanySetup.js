"use client";
import './adgmcmpsetup.css';
import Link from 'next/link';
import { CiLocationArrow1 } from "react-icons/ci";
import KeyAdvantageadgm from './KeyAdvntagesdgm';
import AdgmformNew from '../components/AdgmForm/AdgmformNew';
import CompanyseupStepsadgm from './CompanyseupStepsadgm';
import { MdDoubleArrow } from "react-icons/md";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import WhychoseadgmCmpsetup from './WhychoseadgmCmpsetup';
import FaqAdgmcmpformation from './FaqAdgmcmpformation';
const AdgmcompanySetup = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const financialBusinesslicense = [
        { points: "Investment Banks" },
        { points: "Asset and Fund Management" },
        { points: "FinTech Companies" },
        { points: "Capital Markets and Investment Advisory" }
    ];
    const nonfinancialBusinesslicense = [
        { points: "Technology and Innovation Companies" },
        { points: "Business Consultancy Firms" },
        { points: "Real Estate and Property Development" },
        { points: "Healthcare and Medical Services" }
    ];
    const adgmCompanystructures = [
        {
            title: "Limited Liability Company (LLC)",
            content: "Provides protection against company debts, making it a popular choice."
        },
        {
            title: "Partnership",
            content: "Suitable for businesses with multiple partners."
        },
        {
            title: "Special Purpose Vehicle (SPV)",
            content: "Typically used for managing investments and assets."
        },
        {
            title: "Branch Office",
            content: "Ideal for companies expanding operations to the Abu Dhabi Global Market free zone."
        },

    ]
    return (
        <>
            <div className="adgmcmpsetupcntblk">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='adgm-cmp-setupcnt-fstblk-lft'>
                                <h1>Set Up Your Company in Abu Dhabi Global Market (ADGM)</h1>
                                <p>Setting up your company in the Abu Dhabi Global Market (ADGM) offers a world-class environment for businesses to grow, innovate, and expand. ADGM, located in the heart of Abu Dhabi, is a premier free zone for company formation in ADGM and provides a legal and regulatory framework that benefits companies across various industries. Whether you're a local entrepreneur or an international investor, ADGM company setup offers the infrastructure, support, and flexibility required to establish a successful business.</p>
                                <div className='adgm-cmp-setupcnt-fstblk-lftbtn'>
                                    <Link href="/contact-us">Contact us <CiLocationArrow1 />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='adgm-cmp-setupimg-fstblk-right'>
                                <img src="/images/adgm/adgm-company-formation.webp" alt="Company Formation in ADGM" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='adgm-cmpsrtp-sndblk'>
                <div className='container'>
                    <h2>Why Choose ADGM Company Formation for Your Business Setup?</h2>
                    <p>Company setup in ADGM offers a unique business environment with advantages for both financial and non-financial businesses. By choosing ADGM company formation, you gain access to a globally recognized legal framework, tax incentives, and comprehensive resources to ensure your business thrives.</p>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <KeyAdvantageadgm />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='adgm-cmpsetupfrmblk'>
                                <AdgmformNew />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adgm-cmpsetup-processblk'>
                <CompanyseupStepsadgm />
            </div>

            <div className="adgm-cmpsrtp-frthblk">
                <div className='adgm-cmpsrtp-frthblk-cnt-blk'>
                    <div className='adgm-cmpsrtp-frthblk-leftcnt'>
                        <h2>Types of ADGM Business Licenses</h2>
                        <p>ADGM offers business licenses tailored for both financial and non-financial sectors. Based on your activity, choose from a variety of licenses for company formation in ADGM:</p>
                        <h4>Financial Business Licenses</h4>
                        <ul>
                            {financialBusinesslicense.map((data, index) =>
                                <li key={index}><MdDoubleArrow /> {data.points}</li>
                            )}
                        </ul>
                        <h4>Non-Financial Business Licenses</h4>
                        <ul>
                            {nonfinancialBusinesslicense.map((data, index) =>
                                <li key={index}><MdDoubleArrow /> {data.points}</li>
                            )}
                        </ul>
                    </div>

                    <div className='adgm-cmpsrtp-frthblk-rightcnt'>
                        <h2>ADGM Company Structures</h2>
                        <p>Your company’s structure in ADGM will determine its operations, liabilities, and ownership. Common structures for ADGM company formation include:</p>
                        <div className='adgm-key-benefits-blk'>
                            {adgmCompanystructures.map((benefit, index) => (
                                <div className='adgm-up-block' key={index}>
                                    <div className='adgm-key-points' key={index}>
                                        <div className='adgm-key-points-hd' onClick={() => toggleSection(index)}>
                                            <h6>{benefit.title}</h6>
                                            <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                        </div>
                                        {openSections[index] && (
                                            <div className='adgm-key-points-cnt'>
                                                <p>{benefit.content}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2>Additional Services and Benefits for ADGM Company Formation</h2>
                        <div className='adggcmpaddnserbenblk'>
                            <div className='adggcmpaddnserbenblk-visa'>
                                <h5>Visa Packages</h5>
                                <p>ADGM offers flexible visa packages for businesses and professionals, covering work permits, residency visas, and business licenses.</p>
                            </div>
                            <div className='adggcmpaddnserbenblk-flexible'>
                                <h5>Flexible Payment Plans</h5>
                                <p>With Elevate Business Solutions, access payment plans through selected banks to set up your company with manageable monthly payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='adgmcmpsetupwhuchose-elevateblk'>
                <WhychoseadgmCmpsetup/>
                <FaqAdgmcmpformation/>
            </div>
            <div className='adgmcmpsetupcntus-elevateblk'>
                <div className='adgmcmpsetupcntus-blkcnt'>
                <h2>Contact Elevate Business Solutions Today</h2>
                <p>Ready to establish your business in Abu Dhabi Global Market free zone? Contact Elevate Business Solutions for expert guidance in ADGM company setup services and ensure a smooth and compliant journey to success.</p>
                <div className='adgmcmpsetupcntus-btn'>
                    <Link href="/contact-us">Contact us <CiLocationArrow1 />
                    </Link>
                </div>
                </div>

            </div>
        </>
    )
}
export default AdgmcompanySetup
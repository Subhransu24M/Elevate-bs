"use client"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import BookkeepingabudhabiForm from './BookeepingabudhabiForm';
const WhyChose = () => {

    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Array of key benefit items
    const dropdownContent = [
        {
            title: 'Familiar with UAE Regulations: ',
            content: 'Expertise in adhering to local financial laws and free zone requirements.'
        },
        {
            title: 'Tailored for High-Growth Businesses',
            content: 'Customized services designed to support and drive business expansion.'
        },
        {
            title: 'Strategic Financial Advice',
            content: 'Provides valuable insights to enhance decision-making and growth.'
        },
        {
            title: 'Cost-Effective Solutions',
            content: 'Efficient financial services that offer great value while managing costs.'
        },
        {
            title: 'Compliance with UAE Federal Law No-2 of 2015',
            content: 'Ensures your business meets all legal and regulatory standards.'
        },
        {
            title: 'Expert in Top Accounting Software',
            content: 'Proficient in using leading accounting systems like QuickBooks, ZOHO, ODOO, XERO, and Tally ERP.'
        },
        {
            title: 'Access to Experienced Professionals',
            content: 'Utilizes skilled Chartered Accountants, Account Managers, and VAT Experts.'
        },
        {
            title: 'Trusted by Leading Companies',
            content: 'Proven track record with major clients in DIFC, ADGM, Dubai Mainland, and DMCC.'
        },
        {
            title: 'Experience with Major Stock Exchanges',
            content: 'Handles accounting for companies listed on major stock exchanges in India, Turkey, UAE, and the UK.'
        }
    ];
    return (
        <>
            <div className="whychos-book-blk">
                <div className="container">
                    <div className='why-chos-ebs-adgm-tlt'>
                    <h2>Why Choose Elevate Business Solutions for Expert Outsourced Accounting & Bookkeeping Services in ADGM?</h2>
                    </div>
                
                    <div className='row'>
                        <div className='col-md-8 col-xl-8 col-lg-8 col-sm-12'>
                            <div className='adgm-key-benefits-blk'>
                                {dropdownContent.map((content, index) => (
                                    <div className='adgm-up-block' key={index}>
                                        <div className='adgm-key-points' key={index}>
                                            <div className='adgm-key-points-hd' onClick={() => toggleSection(index)}>
                                                <h6>{content.title}</h6>
                                                <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                            </div>
                                            {openSections[index] && (
                                                <div className='adgm-key-points-cnt'>
                                                    <p>{content.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        <div className='col-md-4 col-xl-4 col-lg-4 col-sm-12'>
                                <BookkeepingabudhabiForm />
                                
                            </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default WhyChose
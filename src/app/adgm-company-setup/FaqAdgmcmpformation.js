"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const FaqAdgmcmpformation = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const adgmcmpforFaq = [
        {
            title: "What types of businesses can be established in ADGM?",
            content: "With Elevate Business Solutions, you can set up various businesses in ADGM, including financial institutions, consultancies, tech companies, and more."
        },
        {
            title: "Can foreign investors fully own a company in ADGM without a local sponsor?",
            content: "Yes, ADGM company formation allows for 100% foreign ownership without the need for a local sponsor."
        },
        {
            title: "How long does ADGM company formation take?",
            content: "The setup process usually takes between 2-4 weeks, depending on the business type and documentation."
        },
        {
            title: "What tax benefits are available for businesses in ADGM?",
            content: "ADGM offers regions with no personal income tax and a corporate tax rate of only 9% for designated free zones."
        },
        {
            title: "What ongoing support does Elevate provide after company setup in ADGM?",
            content: "Our team provides comprehensive support, including visa renewals, regulatory compliance, financial advisory, and office management services."
        },
    ];
    return (
        <>
            <div className="FaqAdgmcmpformation-blk">
                <h2>Frequently Asked Questions (FAQs) on ADGM Company Formation</h2>
                <div className='adgm-key-benefits-blk'>
                    {adgmcmpforFaq.map((benefit, index) => (
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
            </div>
        </>
    )
}
export default FaqAdgmcmpformation
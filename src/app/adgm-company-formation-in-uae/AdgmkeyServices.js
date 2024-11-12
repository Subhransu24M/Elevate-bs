"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './adgmbenefits.css';
const AdgmkeyServices = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Array of key benefit items
    const benefits = [
        {
            title: 'Compliance Consultancy',
            content: 'Navigating the complex regulatory landscape of ADGM, we provide expert guidance to ensure your business remains compliant with all relevant laws and regulations.'
        },
        {
            title: 'Accounting and Bookkeeping Activities',
            content: 'Maintaining accurate financial records is crucial. Our team provides comprehensive accounting and bookkeeping services tailored to your business needs.'
        },
        {
            title: 'Auditing Activities',
            content: 'We offer thorough auditing services to ensure your financial statements are accurate and comply with ADGM’s regulatory requirements.'
        },
        {
            title: 'Company Service Provider',
            content: 'From incorporation to ongoing compliance, we assist in all aspects of setting up and maintaining your company in ADGM.'
        },
        {
            title: 'Management Consultancy Activities',
            content: 'Our management consultancy services help streamline your business operations and enhance overall efficiency.'
        },
        {
            title: 'Tax Consultancy Activities',
            content: 'Optimize your tax position with our expert tax consultancy services, ensuring compliance with all ADGM tax regulations.'
        },
        {
            title: 'Insolvency Practitioner, Official Liquidator',
            content: 'We offer insolvency practitioner services, including acting as an official liquidator to manage and oversee the orderly winding up of businesses.'
        },
        {
            title: 'ADGM Company Setup Services',
            content: 'We specialize in all aspects of ADGM company setup, ensuring a seamless and efficient process for your business establishment.'
        }
        
    ];

    return (
        <>
            <div className='adgm-key-benefits-blk'>
                {benefits.map((benefit, index) => (
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
        </>
    )
}

export default AdgmkeyServices
"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './rakezbenefits.css';
import Image from 'next/image';
import rakezcomp from './images/rakezbenf-img.jpg';

const RakezBenefits = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Array of key benefit items
    const rakezbenefits = [
        {
            title: '100% Foreign Ownership',
            content: 'Retain full control of your business.'
        },
        {
            title: 'Tax Incentives',
            content: 'Enjoy 0% corporate and personal income tax, and 0% withholding tax.'
        },
        {
            title: 'Cost-Effective Setup',
            content: 'Affordable options for both free zone and non-free zone companies.'
        },
        {
            title: 'Diverse Business Licenses',
            content: 'Options for commercial, industrial, educational, e-commerce, and more.'
        },
        {
            title: 'Streamlined Processes',
            content: 'Company formation within 5–10 days.'
        },
        {
            title: 'Remote Setup Options',
            content: 'Establish your business without needing to visit the UAE.'
        },
        {
            title: 'Flexible Office Solutions',
            content: 'Choose from flexi desks, dedicated offices, or industrial warehouses.'
        },
        {
            title: 'Visa Support',
            content: 'Simplified visa procedures for investors, employees, and their families.'
        },
        {
            title: 'Bank Account Assistance',
            content: 'Strategic partnerships with banks for faster account setup.'
        },
        {
            title: 'Women Entrepreneurs',
            content: 'Special packages and incentives for women in business.'
        },
        {
            title: 'Global Connectivity',
            content: 'Easy access via seaports, airports, and highways.'
        }
    ];


    return (
        <>
            <div className='rakez-benf-blk'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                            <div className='license-types-rakez-img'>
                                <Image src={rakezcomp} alt="rakez company formation uae" />
                            </div>
                        </div>
                        <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                            <h2>Benefits of RAK Free Zone Company Formation</h2>
                            <p>RAKEZ provides significant advantages for businesses. Some of the standout benefits of RAKEZ company setup UAE include:</p>
                            <div className='rakez-key-benefits-blk'>
                                {rakezbenefits.map((benefit, index) => (
                                    <div className='rakez-up-block' key={index}>
                                        <div className='rakez-key-points' key={index}>
                                            <div className='rakez-key-points-hd' onClick={() => toggleSection(index)}>
                                                <h6>{benefit.title}</h6>
                                                <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                            </div>
                                            {openSections[index] && (
                                                <div className='rakez-key-points-cnt'>
                                                    <p>{benefit.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default RakezBenefits
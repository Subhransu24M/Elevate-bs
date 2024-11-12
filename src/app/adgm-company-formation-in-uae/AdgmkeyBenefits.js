"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './adgmbenefits.css';
const AdgmkeyBenefits = () => {
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
            title: '100% Foreign Ownership',
            content: 'ADGM allows full foreign ownership of companies, giving you complete control over your business operations and decisions.'
        },
        {
            title: 'Strategic Location',
            content: 'Situated in the UAE, ADGM offers a prime location for businesses looking to access markets in the Middle East, Africa, and South Asia.'
        },
        {
            title: 'Comprehensive Business Activities',
            content: 'ADGM supports a wide range of business activities, including investment holding, trading, professional services, and e-commerce.'
        },
        {
            title: 'Streamlined Incorporation Process',
            content: 'The ADGM incorporation process is designed to be quick, easy, and cost-effective, allowing you to set up your business with minimal hassle.'
        },
        {
            title: 'Skilled Workforce',
            content: 'Access to a highly skilled and diverse workforce to support your business growth and operations.'
        },
        {
            title: 'Modern Legal Framework',
            content: 'ADGM operates under a Common Law framework, providing a flexible and predictable legal environment that supports innovation and business growth.'
        },
        {
            title: 'Business-Friendly Infrastructure',
            content: 'State-of-the-art office spaces, meeting rooms, and virtual office services are available, enabling businesses to focus on their core operations.'
        },
        {
            title: 'Regulatory Support',
            content: 'Our team provides ongoing compliance support, ensuring your business adheres to all local regulations and avoids costly penalties.'
        },
        {
            title: 'Dedicated Customer Service',
            content: 'ADGM is committed to providing excellent customer service, guiding you through the incorporation process and supporting your business journey.'
        }
    ];

    return (
        <>
            <div className='adgm-key-benefits-blk'>
                {benefits.map((benefit, index) => (
                    <div className='adgm-up-block'>
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

export default AdgmkeyBenefits
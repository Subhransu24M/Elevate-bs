"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const KeyAdvantageadgm = () =>{
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
            title: 'Global Recognition and Legal Framework',
            content: 'ADGM operates under a common law framework, ensuring transparency, impartiality, and global credibility.'
        },
        {
            title: '100% Foreign Ownership',
            content: 'ADGM company setup allows for complete foreign ownership, granting full control to international investors.'
        },
        {
            title: 'No Restrictions on Capital or Currency',
            content: 'There are no restrictions on capital repatriation or foreign currency transfers.'
        },
        {
            title: 'Tax Benefits for Businesses in ADGM',
            content: 'Enjoy zero personal income tax and a corporate tax rate of just 9%, where applicable, with no withholding taxes for 50 years.'
        },
        {
            title: 'Strategic Location for Business in UAE',
            content: 'Centrally positioned in the Middle East, ADGM provides easy access to markets across Asia, Africa, and Europe, near major airports like Dubai International Airport.'
        },
        {
            title: 'Vibrant Business Ecosystem in ADGM',
            content: 'Hosting over 100 startups, accelerators, and a dynamic workforce, ADGM is an ideal hub for innovation and collaboration.'
        },
        
    ];
    
    return (
        <>
        <div className="key-advan-adgmcmpsetup">
            <h4>Key Advantages of ADGM Company Formation in Abu Dhabi</h4>
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
        </div>
        </>
    )
}
export default KeyAdvantageadgm
"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdDoubleArrow } from "react-icons/md";

const RakezkeyandDocument = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Array of key benefit items
    const rakezkeyFeatures = [
        {
            title: 'Specialized Zones',
            content: 'Industrial, academic, and business activity zones to suit diverse needs.'
        },
        {
            title: 'Minimum Share Capital',
            content: 'Start with just AED 10,000 (industrial activities AED 15,000).'
        },
        {
            title: 'Multiple Business Activities',
            content: 'Operate several activities under one license.'
        },
        {
            title: 'Comprehensive Infrastructure',
            content: 'Access to business centers, land for development, and staff accommodation.'
        },
        {
            title: 'One-Stop Services',
            content: 'All government services under one roof for convenience'
        },
        {
            title: 'Global Network',
            content: 'Join over 14,000 companies from 50+ countries operating in RAKEZ.'
        },
    ];

    const rakezDocuments = [
        {points: "Passport copy (colored)."},
        {points: "UAE entry stamp or visa copy (if in UAE)."},
        {points: "NOC for general manager (for UAE residents)."},
        {points: "Business plan."},
        {points: "Shareholder resolution for company establishment."},
        {points: "Trade license or registration certificate (for corporate shareholders)."},
        {points: "Memorandum and Articles of Association (for corporate shareholders)."},
        {points: "Certificate of good standing (for corporate shareholders)."},
    ];

    return (
        <>
            <div className="rakezkeydoc-blk">
                <div className="rakez-key-ftur-blk">
                    <h2>Key Features of RAKEZ Free Zone Companies</h2>
                    <p>RAKEZ offers a robust framework for businesses. Whether you’re considering a RAK Free Zone Company Formation or a RAKEZ business setup, here are the standout features:</p>
                    <div className='rakez-key-benefits-blk'>
                        {rakezkeyFeatures.map((benefit, index) => (
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
                <div className="rakez-doc-blk">
                    <h2>Documents Required for RAKEZ Company Setup</h2>
                    <p>Setting up a company in Ras Al Khaimah requires the following documents</p>
                    <ul>
                        {rakezDocuments.map((doc,docIndex) =>
                        <li key={docIndex}><MdDoubleArrow /> {doc.points}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default RakezkeyandDocument
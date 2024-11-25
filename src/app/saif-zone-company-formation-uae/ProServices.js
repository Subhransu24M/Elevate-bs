"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const ProServices = () => {
    const [openSections, setOpenSections] = useState({});
    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const saifzoneProservices = [
        {
            name: "Company Closure and Renewal:",
            content: "Efficient handling of company closures, license renewals, and audit report arrangements."
        },
        {
            name: "Visa Assistance:",
            content: "Support with investor, employee, and family visas."
        },
        {
            name: "Administrative Tasks:",
            content: "Assistance with import/export code registration, chamber of commerce registration, tax residency certificates, and more."
        },
        {
            name: "Customs Registration & ESR Filing:",
            content: "Facilitation of customs registration, Economic Substance Regulations (ESR) filing, and VAT filing."
        },
        {
            name: "Special Approvals:",
            content: "Handling of special approvals and other regulatory requirements."
        }
    ]

    return (
        <>
            <div className="proservc-blk">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                            <h2>PRO Services in SAIF Zone</h2>
                            <p>Elevate Business Solutions,offers comprehensive PRO services to streamline administrative tasks. Our PRO services include:</p>

                            <div className='adgm-key-benefits-blk'>
                                {saifzoneProservices.map((proservices, index) => (
                                    <div className='adgm-up-block' key={index}>
                                        <div className='adgm-key-points'>
                                            <div className='adgm-key-points-hd' onClick={() => toggleSection(index)}>
                                                <h6>{proservices.name}</h6>
                                                <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                            </div>
                                            {openSections[index] && (
                                                <div className='adgm-key-points-cnt'>
                                                    <p>{proservices.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p>Our headquarters at the entrance of SAIF Zone ensures prompt and reliable service. Benefit from our special discount PRO services package and ensure seamless business operations in SAIF Zone.</p>
                        </div>
                        <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                            <div className='saifzone-rpo-imgblk'>
                                <img src="/images/saif-zone/Sharjah.webp" alt="saif zone services in uae" loading='lazy' fetchPriority='high'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProServices
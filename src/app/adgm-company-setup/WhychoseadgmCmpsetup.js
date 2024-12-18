"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const WhychoseadgmCmpsetup = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const whychoseelvData = [
        {
            title: "Complete ADGM Company Setup Support",
            content: "From name registration to business licensing, we streamline your company formation in ADGM."
        },
        {
            title: "Compliance and Regulatory Guidance",
            content: "Our team ensures adherence to ADGM regulations."
        },
        {
            title: "Customized Solutions",
            content: "We tailor our services to fit your business model."
        },
        {
            title: "End-to-End Support",
            content: "From documentation to bank account setup, we provide seamless support to make ADGM company formation stress-free."
        },
    ];
    return (
        <>
            <div className="whychose-elevateadgmcmpblk">
                <h2>Why Choose Elevate Business Solutions for Your ADGM Company Setup Services?</h2>
                <p>At Elevate Business Solutions, we specialize in making ADGM company setup in Abu Dhabi simple, efficient, and compliant. Our expertise includes:</p>
                <div className='adgm-key-benefits-blk'>
                    {whychoseelvData.map((benefit, index) => (
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
export default WhychoseadgmCmpsetup
"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const WhyChosejafza = () =>{
    const [openSections, setOpenSections] = useState({});
    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const jafzawhychoose = [
        {
            name: "Privacy and Confidentiality ",
            content: "JAFZA provides exceptional privacy for offshore companies. Your financial details and personal information remain confidential, protected from public records. Additionally, JAFZA offshore company formation is not subject to mandatory audits, enhancing privacy and reducing administrative burdens."
        },
        {
            name: "Strong Asset Protection",
            content: "Company formation in JAFZA offshore ensures robust asset protection. The setup creates a shield against potential legal and financial risks, safeguarding the company’s assets and investors’ interests from external liabilities."
        },
        {
            name: "Access to Global Markets",
            content: "A JAFZA offshore company enhances your global business profile, facilitating international partnerships and market access. The ability to open UAE bank accounts further supports international financial operations and currency diversification."
        },
        {
            name: "Tax Benefits",
            content: "While the UAE has introduced a 9% corporate tax rate, JAFZA offshore companies benefit from tax exemptions as they operate outside the UAE jurisdiction. This tax advantage contributes to a favorable financial environment for your business."
        },
    ]


    return (
        <>
        <div className="whychosjafza-blk">
            
                        <div className="whychos-jafza-cnt">
                            <h2>Why Choose JAFZA Offshore Company Formation Dubai?</h2>
                            <div className='adgm-key-benefits-blk'>
                                    {jafzawhychoose.map((choose, index) => (
                                        <div className='jafza-up-block' key={index}>
                                            <div className='adgm-key-points'>
                                                <div className='jafza-key-points-hd' onClick={() => toggleSection(index)}>
                                                    <h6>{choose.name}</h6>
                                                    <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                                </div>
                                                {openSections[index] && (
                                                    <div className='jafza-key-points-cnt'>
                                                        <p>{choose.content}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                
        </div>
        </>
    )
}
export default WhyChosejafza
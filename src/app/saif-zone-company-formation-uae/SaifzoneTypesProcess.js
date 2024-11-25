"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
const SaifzoneTypesProcess = () => {

    const [openSections, setOpenSections] = useState({});
    const [openProcess, setOpenProcess] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const toggleProcessSection = (processIndex) => {
        setOpenProcess((prevState) => ({
            ...prevState,
            [processIndex]: !prevState[processIndex],
        }));
    };

    const saifzonetypes = [
        {
            name: "Commercial License:",
            content: "Ideal for import, export, trading, distribution, and storage of goods. This license provides flexibility to trade in a wide range of products within the free zone."
        },
        {
            name: "Industrial License:",
            content: "Required for light manufacturing, assembly, processing, and packaging. It grants access to top-notch production facilities and a skilled workforce."
        },
        {
            name: "Service License:",
            content: "Designed for businesses offering professional and consulting services such as legal, accounting, marketing, IT, engineering, and healthcare."
        },
        {
            name: "Professional License:",
            content: "Tailored for individuals with specialized skills like doctors, lawyers, architects, engineers, and financial advisors to practice independently."
        },
        {
            name: "E-Commerce License:",
            content: "For businesses operating online stores and e-commerce activities, allowing seamless online trading within the free zone and beyond."
        }
    ]

    const saifzoneprocess = [
        {
            name: "Initial Consultation",
            content: "Discuss your business goals and preferred license type. Our experts assess your needs and recommend the most suitable license."
        },
        {
            name: "Company Formation",
            content: "We handle all paperwork and coordinate with SAIF Zone authorities to secure your trade license and ensure regulatory compliance."
        },
        {
            name: "Visa Processing",
            content: "We assist with obtaining visas for investors, employees, and dependents, managing all applications and liaising with immigration authorities."
        },
        {
            name: "Office Solutions: ",
            content: "We help you select the ideal office space within SAIF Zone, offering options from serviced offices to shared workspaces."
        },
        {
            name: "Ongoing Support",
            content: "Continuous guidance and assistance with business operations, including PRO services for annual renewals, visa renewals, and other administrative tasks."
        }
    ]

    return (
        <>
            <div className="saifzone-type-proc-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="saif-zone-typr-proc-blk-cnt">
                                <h2>Types of Licenses for Company Formation in Sharjah Free Zone</h2>
                                <p>Selecting the appropriate business license is crucial for ensuring compliance and optimizing operations. SAIF Zone offers various licenses tailored to different business activities</p>
                                <div className='adgm-key-benefits-blk'>
                                    {saifzonetypes.map((types, index) => (
                                        <div className='adgm-up-block' key={index}>
                                            <div className='adgm-key-points'>
                                                <div className='adgm-key-points-hd' onClick={() => toggleSection(index)}>
                                                    <h6>{types.name}</h6>
                                                    <span className='benefits-symbol'>{openSections[index] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                                </div>
                                                {openSections[index] && (
                                                    <div className='adgm-key-points-cnt'>
                                                        <p>{types.content}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="saif-zone-typr-proc-blk-cnt">
                                <h2>Process for Business Setup in SAIF Zone</h2>
                                <p>Navigating the business setup in Sharjah Airport Free Zone is straightforward with the right guidance. Here’s how we assist you:</p>
                                <div className='adgm-key-benefits-blk'>
                                    {saifzoneprocess.map((process, processIndex) => (
                                        <div className='adgm-up-block' key={processIndex}>
                                            <div className='adgm-key-points'>
                                                <div className='adgm-key-points-hd' onClick={() => toggleProcessSection(processIndex)}>
                                                    <h6>{process.name}</h6>
                                                    <span className='benefits-symbol'>{openProcess[processIndex] ? <FaMinus id="minus" /> : <FaPlus id="plus" />}</span>
                                                </div>
                                                {openProcess[processIndex] && (
                                                    <div className='adgm-key-points-cnt'>
                                                        <p>{process.content}</p>
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
            </div>
        </>
    )
}
export default SaifzoneTypesProcess
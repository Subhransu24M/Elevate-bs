"use client";
import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { MdDoubleArrow } from "react-icons/md";


const RakezlegalSteps = () => {
    const [openSections, setOpenSections] = useState({});

    // Function to toggle a section by its index
    const toggleSection = (index) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Array of key benefit items
    const rakezLegal = [
        {
            title: 'Free Zone Limited Liability Company (FZ-LLC):',
            content: 'An FZ-LLC allows you to establish a company with 2 to 50 shareholders, providing a collaborative and dynamic platform for growth. This setup is ideal for entrepreneurs seeking flexibility, cost-effectiveness, and a business-friendly environment.'
        },
        {
            title: 'Branch',
            content: 'Foreign companies can establish branches in RAKEZ, leveraging its strategic advantages and streamlined processes. UAE-based companies can also extend their operations into the free zone through a branch, gaining access to new opportunities and expanding their presence.'
        },
    ];

    const rakezcmpformSteps = [
        {points: "Business Activity and Legal Structure"},
        {points: "Name Reservation"},
        {points: "License Application Submission"},
        {points: "Initiate the Payment"},
        {points: "MOA and Lease Agreement Signing"},
        {points: "License Issuance"},
        {points: "Visa Processing"},
        {points: "Setup Completion"},
        {points: "Bank Account Opening"},
    ]

    return (
        <>
            <div className="rakezlegalstep-blk">
                <div className="rakez-legal-blk">
                    <h2>Legal Structure Options in RAKEZ Free Zone</h2>
                    <p>RAKEZ offers two primary legal structures to facilitate RAKEZ Business Setup:</p>
                    <div className='rakez-key-benefits-blk'>
                        {rakezLegal.map((benefit, index) => (
                            <div className='rakez-up-block' key={index}>
                                <div className='rakez-key-points' key={index}>
                                    <div className='rakez-key-points-hd' onClick={() => toggleSection(index)}>
                                        <h6>{benefit.title}</h6>
                                        <span className='benefits-symbol'>{openSections[index] ? <FaAngleDown id="minus" /> : <FaAngleUp id="plus" />}</span>
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
                    <h6 className='rakez-bth-stm'>Both options underline RAKEZ’s commitment to supporting diverse business needs.</h6>
                </div>
                <div className="rakez-cmpform-steps-blk">
                    <h2>Steps for RAKEZ Free Zone Company Formation</h2>
                    <p>Setting up a business in RAKEZ Free Zone is a streamlined process designed to help entrepreneurs focus on growth. Here's a step-by-step guide to forming your company:</p>
                    <ul>
                        {rakezcmpformSteps.map((steps,stepsIndex) =>
                        <li key={stepsIndex}><MdDoubleArrow /> {steps.points}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default RakezlegalSteps
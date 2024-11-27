"use client"

import { useState } from "react";

const JafzaPrice = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [facilityOption, setFacilityOption] = useState("");

    const jafzaregistrationPrice = [
        {
            "SetupType": "Branch Company",
            "RegistrationFee": "5,000 AED",
            "Capital": "Not Required"
        },
        {
            "SetupType": "Free Zone Establishment (FZE)",
            "Description": "New Company (One Shareholder)",
            "RegistrationFee": "5,000 AED",
            "Capital": "Will be decided by the investor"
        },
        {
            "SetupType": "Free Zone Company (FZCO)",
            "Description": "New Company (2-50 shareholders)",
            "RegistrationFee": "5,000 AED",
            "Capital": "Will be decided by the investor"
        }
    ];

    const jafzaLicense = [
        {
            SINo: "1",
            License: "Trading License (Type 1)",
            Description: "(7 products max from one group)",
            AnualFees: "5,000 (Dhs.500 extra for each additional product)"
        },
        {
            SINo: "2",
            License: "Trading License (Type 2)",
            Description: "(12 products max from 2 groups)",
            AnualFees: "8,500 (Dhs.500 extra for each additional product)"
        },
        {
            SINo: "3",
            License: "Industrial License (Type 1)",
            Description: "(7 products max from one group)",
            AnualFees: "5,000 (Dhs.500 extra for each additional product)"
        },
        {
            SINo: "4",
            License: "Industrial License (Type 2)",
            Description: "(12 products max from 2 groups)",
            AnualFees: "8,500 (Dhs.500 extra for each additional product)"
        },
        {
            SINo: "5",
            License: "Service License",
            AnualFees: "5,000"
        },
        {
            SINo: "6",
            License: "Logistics",
            AnualFees: "15,000"
        },
        {
            SINo: "7",
            License: "General Trading",
            AnualFees: "15,000"
        },
        {
            SINo: "8",
            License: "E-Commerce",
            AnualFees: "15,000"
        }
    ];

    const jafzaotherCharges = [
        {
            charges : "Security Deposit",
            amount : "10% of the rent",
            facility : "Applicable for Office, Warehouse & Showroom",
            remarks : "Onetime Payment- Refundable"
        },
        {
            charges : "Public, Health & Levy fees (PHL fees)",
            amount : "2% of the rent",
            description: "(maximum AED 10,000)",
            facility : "Applicable for Warehouse, Showroom & Plot",
            remarks : "Annually"
        },
        {
            charges : "Company Immigration Card",
            amount : "AED 2,000",
            facility : "Applicable for all types of facilities",
            remarks : "Annually"
        }
    ];

    const jafzaFacilities = {
        office: [
            { facility: "Standard office G+1", area: "26.88", AnnualRent: "2,000/sqm/year", InsuranceYear: "100/year", NamePlate: "500" },
            { facility: "Jafza 14, 15, 16, 17", area: "30 & above", AnnualRent: "1,900/sqm/year", InsuranceYear: "4/sqm/year", NamePlate: "500" },
            { facility: "Jafza View 18 , 19", area: "30 & above", AnnualRent: "1,800/sqm/year", InsuranceYear: "4/sqm/year", NamePlate: "500" },
            { facility: "National Industries Park (NIP – for NIP companies only)", area: "30 & above", AnnualRent: "1,000 – 1,400/sqm/year", InsuranceYear: "4/sqm/year", NamePlate: "500" },
            { facility: "Jafza 22, 23, 24 25", area: "10 & above", AnnualRent: "2,000/sqm/year", InsuranceYear: "4/sqm/year", NamePlate: "500" },
            { facility: "Jafza One", area: "30 & above", AnnualRent: "1,800/sqm/year", InsuranceYear: "4/sqm/year", NamePlate: "500" },
        ],
        warehouse: [
            { facility: "Warehouses(10 KVA-74 KVA)", area: "1100, 702, 669, 619, 601, 555, 349, 313", AnnualRent: "300 - 650/sqm/year", InsuranceYear: "300/year", NamePlate: "NA" },
            { facility: "Factory LIU(100 KVA – 130KVA)", area: "1100, 702, 619, 601, 555, 543", AnnualRent: "300 - 650/sqm/year", InsuranceYear: "300/year", NamePlate: "NA" },
            
        ],
        plot: [
            { facility: "Plot of Land", area: "Available in different sizes (Mini. 10,000sqm )", AnnualRent: "40 – 90/sqm/year (Depending on  the location of the land)", InsuranceYear: "-", NamePlate: "NA" },
            
        ],
        businessPlus: [
            { facility: "Type A (Showroom + Office + Warehouse)", area: "891", AnnualRent: "600/sqm/year", InsuranceYear: "1400/year", NamePlate: "NA" },
            { facility: "Type B (Showroom + Office + Warehouse)", area: "772", AnnualRent: "600/sqm/year", InsuranceYear: "1400/year", NamePlate: "NA" },
            { facility: "Type C (Showroom + Office)", area: "423.72", AnnualRent: "600/sqm/year", InsuranceYear: "1000/year", NamePlate: "NA" },
            { facility: "Type D (W/H)", area: "348.34", AnnualRent: "450/sqm/year", InsuranceYear: "400/year", NamePlate: "NA" },
            
        ]
    }

    const handleSelectionChange = (e) => {
        setSelectedOption(e.target.value);
        setFacilityOption(""); // Reset facility option when main dropdown changes
    };

    const handleFacilitySelectionChange = (e) => {
        setFacilityOption(e.target.value);
    };

    return (
        <div className="jafza-price-blk">
            <div className="container">
                <div className="row">
                    <h2 className="jafza-prc-tlt">JAFZA offshore company formation fees</h2>
                    <div className="jafza-price-select-blk">
                        {/* <span className="jafza-prc-opt-tlt">Choose option to check the price</span> */}
                        <select className="jafza-prc-slt" value={selectedOption} onChange={handleSelectionChange}>
                            <option value="" >Select option to check the price</option>
                            <option value="Registration">Registration</option>
                            <option value="License">JAFZA License</option>
                            <option value="Other Charges">Other Charges</option>
                            <option value="Facilities">JAFZA Facilities</option>
                        </select>

                        {selectedOption === "Registration" && (
                            <div className="reg-pric-blk">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Setup Type</th>
                                            <th>Registration Fee (One Time payment) AED</th>
                                            <th>Capital (AED)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jafzaregistrationPrice.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>
                                                    {item.SetupType}
                                                    {item.Description && (
                                                        <div style={{ fontSize: "12px", fontStyle: "italic" }}>
                                                            {item.Description}
                                                        </div>
                                                    )}
                                                </td>
                                                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                    {item.RegistrationFee}
                                                </td>
                                                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                    {item.Capital}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {selectedOption === "License" && (
                            <div className="reg-pric-blk">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>SI. No.</th>
                                            <th>Licenses</th>
                                            <th>Annual Fees (AED)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jafzaLicense.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                    {item.SINo}
                                                </td>
                                                <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>
                                                    {item.License}
                                                    {item.Description && (
                                                        <div style={{ fontSize: "12px", fontStyle: "italic" }}>
                                                            {item.Description}
                                                        </div>
                                                    )}
                                                </td>
                                                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                    {item.AnualFees}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        
                        {/* Other Charges Block */}

                        {selectedOption === "Other Charges" && (
                            <div className="reg-pric-blk">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Charges</th>
                                        <th>Amount</th>
                                        <th>Facility</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jafzaotherCharges.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                {item.charges }
                                            </td>
                                            <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>
                                                {item.amount}
                                                {item.description && (
                                                    <div style={{ fontSize: "12px", fontStyle: "italic" }}>
                                                        {item.description}
                                                    </div>
                                                )}
                                            </td>
                                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                {item.facility}
                                            </td>
                                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                                {item.remarks}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        )}

                        {/* Other Charges End */}

                        {/* JAFZA Facilities Block */}

                        {selectedOption === "Facilities" && (
                            <div>
                                {/* <span>Select Facility Type</span> */}
                                <select className="jafza-prc-slt" value={facilityOption} onChange={handleFacilitySelectionChange}>
                                    <option value="">Select Facility Type</option>
                                    <option value="office">Office</option>
                                    <option value="warehouse">Warehouse</option>
                                    <option value="plot">Plot</option>
                                    <option value="businessPlus">Business Plus</option>
                                </select>

                                {facilityOption && (
                                    <div className="reg-pric-blk">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Facility</th>
                                                    <th>Area (Sqm)</th>
                                                    <th>Annual Rent sqm/year (AED)</th>
                                                    <th>Insurance/year (AED)</th>
                                                    <th>Name Plate (AED)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {jafzaFacilities[facilityOption].map((item, index) => (
                                                    <tr key={index}>
                                                        <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{item.facility}</td>
                                                        <td>{item.area}</td>
                                                        <td>{item.AnnualRent}</td>
                                                        <td>{item.InsuranceYear}</td>
                                                        <td>{item.NamePlate}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Facilities End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JafzaPrice;

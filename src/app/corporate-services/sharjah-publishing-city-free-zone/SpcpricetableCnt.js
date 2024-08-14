"use client"
import { useState } from "react"
import { spcpricelist } from "./spcpricetable"

const SpcpricetableCnt = () => {
    const [selectedPackage, setSelectedPackage] = useState(Object.keys(spcpricelist)[0]);

    const handleSelectChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const selectedData = spcpricelist[selectedPackage];

    return (
        <>
            <div className="spc-tblprc-blk">
                <div className="spcvisa-typ-blk">
                    <label className="spcvisa-typ-lbl">Select Visa Package</label>
                    <select className="spc-visatypefld" value={selectedPackage} onChange={handleSelectChange}>
                        {Object.keys(spcpricelist).map((packageName) => (
                            <option key={packageName} value={packageName}>
                                {packageName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="spc-prctblblk">
                    <div className="slct-spcvisatlt">
                    <h2 className="spc-seltvis-tlt">👉 {selectedPackage}</h2>
                    </div>
                    <table className="spc-prctbl">
                        <thead className="spc-prctbl-thead">
                            <tr className="spc-prctbl-th">
                                <th>Particulars</th>
                                <th>Amount</th>
                                <th>Unit</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className="spc-prctbl-tbdy">
                            <tr className="spc-prctbl-tr">
                                <td>License Fees</td>
                                <td> <span className="spcvisaprc">{selectedData.licenseFees.toFixed(2)} </span><span className="spc-vsa-crn">AED</span></td>
                                <td>1</td>
                                <td><span className="spcvisaprc">{selectedData.licenseFees.toFixed(2)} </span><span className="spc-vsa-crn">AED</span></td>
                            </tr>
                            <tr className="spc-prctbl-tr">
                                <td>Establishment Card</td>
                                <td><span className="spcvisaprc">{selectedData.establishmentCard.toFixed(2)} </span><span className="spc-vsa-crn">AED</span></td>
                                <td>1</td>
                                <td><span className="spcvisaprc">{selectedData.establishmentCard.toFixed(2)} </span><span className="spc-vsa-crn">AED</span></td>
                            </tr>
                            <tr className="spc-prctbl-tr">
                                <td>VISA Allocation</td>
                                <td><span className="spcvisaprc">{selectedData.visaAllocation.toFixed(2)} </span> <span className="spc-vsa-crn">AED</span></td>
                                <td>1</td>
                                <td><span className="spcvisaprc">{selectedData.visaAllocation.toFixed(2)} </span><span className="spc-vsa-crn">AED</span></td>
                            </tr>
                            <tr className="spc-prctbl-tr">
                                <td colSpan="3" >Total</td>
                                <td><span className="spcvisaprc">{selectedData.total.toFixed(2)}</span> <span className="spc-vsa-crn">AED</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default SpcpricetableCnt
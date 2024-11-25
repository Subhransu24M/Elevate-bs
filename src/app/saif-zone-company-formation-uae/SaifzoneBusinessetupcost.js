import { HiArrowLongRight } from "react-icons/hi2";
const SaifzoneBusinessetupcost = () => {

    const packageData = [
        { name: "SAIF OFFICE (3 Visas)" },
        { name: "Discounted Package Year 1 (AED)" },
        { name: "Year 2" },
        { name: "Year 3" },
    ]

    const orpackageData = [
        { name: "SAIF SUITE (8 Visas for 21 sqm)" },
        { name: "Discounted Package Year 1 (AED)" },
        { name: "Year 2" },
        { name: "Year 3" },
    ]



    const packageDetails = [
        {
            packagename: "Lease of SAIF Desk (Annually)",
            costs: [
                { cost: "10,800" },
                { cost: "2700" },
                { cost: "2700" },
            ]
        },
        {
            packagename: "Service Charges (Annually)",
            costs: [
                { cost: "" },
                { cost: "3000" },
                { cost: "3000" },
            ]
        },
        {
            packagename: "License Fee (Annually)",
            costs: [
                { cost: "" },
                { cost: "7500" },
                { cost: "7500" },
            ]
        },
        {
            packagename: "VAT",
            costs: [
                { cost: "" },
                { cost: "150" },
                { cost: "150" },
            ]
        },
        {
            packagename: "Total",
            costs: [
                { cost: "" },
                { cost: "13350" },
                { cost: "13350" },

            ]
        },
    ]

    const orpackageDetails = [
        {
            packagename: "Lease of SAIF Suite - 21 sqm (Annually)",
            costs: [
                { cost: "25200" },
                { cost: "25200" },
                { cost: "25200" },
            ]
        },
        {
            packagename: "Miscellaneous Charges (Annually)",
            costs: [
                { cost: "3300" },
                { cost: "3000" },
                { cost: "3000" },
            ]
        },
        {
            packagename: "Standard License Fee (Annually)",
            costs: [
                { cost: "0" },
                { cost: "7500" },
                { cost: "7500" },
            ]
        },
        {
            packagename: "Refundable Lease Deposit (First Year Only)",
            costs: [
                { cost: "0" },
                { cost: "0" },
                { cost: "0" },
            ]
        },
        {
            packagename: "VAT",
            costs: [
                { cost: "150" },
                { cost: "150" },
                { cost: "150" },

            ]
        },
        {
            packagename: "Total",
            costs: [
                { cost: "28650" },
                { cost: "35850" },
                { cost: "35850" },

            ]
        },
    ]
    return (
        <>
            <div className="container">
            <h2>SAIF Zone Business Setup Cost</h2>
            <p>Understand the SAIF Zone company registration costs to plan your business setup efficiently.</p>
                <div className="row">
                    <div className="col-md-12 col-xl-8 col-lg-8 col-sm-12 p-0">
                        <table className="saifzone-comp-cost-tbl">
                            <tbody>
                                <tr>
                                    {packageData.map((visatype, index) =>
                                        <th key={index} style={{ whiteSpace: "pre-line" }}>{visatype.name}</th>
                                    )}
                                </tr>
                                {packageDetails.map((pname, index) =>
                                    <tr key={index}>
                                        <td>{pname.packagename}</td>
                                        {
                                            pname.costs.map((pcosts, pIndex) =>
                                                <td key={pIndex}>{pcosts.cost}</td>
                                            )
                                        }
                                    </tr>
                                )}

                            </tbody>
                        </table>
                        
                    </div>
                    <div className="col-md-12 col-xl-4 col-lg-4 col-sm-12 p-0 saif-pkg-bg">
                    <h5>Package Includes: </h5>
                        <ul>
                            <li><HiArrowLongRight /> Dedicated furnished shared space.</li>
                            <li><HiArrowLongRight /> Utility Charges</li>
                            <li><HiArrowLongRight /> Quota for 3 visas</li>
                            <li><HiArrowLongRight /> Signboard</li>
                        </ul>
                    </div>
                </div>
                   
                   <div className="row">
                    <div className="col-md-12 col-xl-8 col-lg-8 col-sm-12 p-0 ">
                        <table className="saifzone-comp-cost-tbl">
                            <tbody>
                                <tr>
                                    {orpackageData.map((ordata, index) =>
                                        <th key={index} style={{ whiteSpace: "pre-line" }}>{ordata.name}</th>
                                    )}
                                </tr>
                                {orpackageDetails.map((orpname, index) =>
                                    <tr key={index}>
                                        <td>{orpname.packagename}</td>
                                        {
                                            orpname.costs.map((pcosts, pIndex) =>
                                                <td key={pIndex}>{pcosts.cost}</td>
                                            )
                                        }
                                    </tr>
                                )}

                            </tbody>
                        </table>
                        
                    </div>
                    <div className="col-md-12 col-xl-4 col-lg-4 col-sm-12 p-0 saif-pkg-bg">
                    <h5>Package Includes: </h5>
                        <ul>
                            <li><HiArrowLongRight /> Dedicated fully furnished office.</li>
                            <li><HiArrowLongRight /> Utility Charges.</li>
                            <li><HiArrowLongRight /> Quota for 8 visas.</li>
                            <li><HiArrowLongRight /> Signboard.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
export default SaifzoneBusinessetupcost
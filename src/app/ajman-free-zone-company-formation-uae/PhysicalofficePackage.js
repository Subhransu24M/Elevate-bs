import { FaHandPointRight } from "react-icons/fa";

const PhysicalofficePackage = () => {
    const packageData = [
        {
            // title: "PACKAGE",
            visatype: [
                { name: "VISA" },
                { name: "1 Year" },
                { name: "2 Years" },
                { name: "3 Years" },
                { name: "4 Years" },
            ],
        },
    ]

    const packageDetails = [
        {
            packagename: "1",
            costs: [
                { cost: "21,750" },
                { cost: "39,150" },
                { cost: "52,200" },
                { cost: "65,250" },
            ]
        },
        {
            packagename: "2",
            costs: [
                { cost: "24,750" },
                { cost: "44,550" },
                { cost: "59,400" },
                { cost: "74,250" },
            ]
        },
        {
            packagename: "3",
            costs: [
                { cost: "29,750" },
                { cost: "53,550" },
                { cost: "71,400" },
                { cost: "89,250" },
            ]
        },
        {
            packagename: "4",
            costs: [
                { cost: "35,500" },
                { cost: "63,900" },
                { cost: "85,200 " },
                { cost: "106,500" },
            ]
        },

    ]

    return (
        <>
            <div className="physical-off-offc-blk">
                <div className="container">
                    <h2>ALL - INCLUSIVE PACKAGES WITH PHYSICAL OFFICE </h2>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                            <table className="ajman-comp-cost-tbl">
                                <tbody>
                                    <tr>
                                        {packageData[0].visatype.map((visatype, index) =>
                                            <th key={index}>{visatype.name}</th>
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

                            <div className="physical-off-ul">
                                <ul>
                                    <li><FaHandPointRight className="ajman-hand" />
                                        Refundable deposit: 500 AED </li>
                                    <li><FaHandPointRight className="ajman-hand" />
                                        Quota availability of upto 8 Visas</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                            <h5>All Visa Packages Include the Following: </h5>
                            <p>● Up to 5 mix activities (except General Trading) ● Up to 5 Shareholders ● Business license  ● Lease agreement for a Physical office  ● Memorandum and Articles of Association ● Commercial Registry Certificate ● Certificate of incorporation ● Share Certificate ● Establishment card ● E- Channel ● Investor Security approval ● UAE Residency visa, medical test, Emirates ID ● Visa status change</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PhysicalofficePackage
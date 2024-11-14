
const CompanysetupCost = () => {

    const packageData = [
        {
            // title: "PACKAGE",
            visatype: [
                { name: "VISA" },
                { name: "1 Year" },
                { name: "2 Years" },
                { name: "3 Years" },
                { name: "4 Years" },
                { name: "5 Years" },
                { name: "6 Years" }
            ],
        },
    ]

        const packageDetails =[
            {
                packagename: "Kickstarter Package",
                costs:[
                    {cost: "0"},
                    {cost: "5,555"},
                    {cost: "9,999"},
                    {cost: "14,141"},
                    {cost: "17,171"},
                    {cost: "21,212"},
                    {cost: "25,252"},
                ]
            },
            {
                packagename: "Freedom Package",
                costs:[
                    {cost: "1"},
                    {cost: "12,121"},
                    {cost: "22,222"},
                    {cost: "31,313"},
                    {cost: "40,000"},
                    {cost: "47,474"},
                    {cost: "25,252"},
                ]
            },
            {
                packagename: "Starter Visa Package",
                costs:[
                    {cost: "1"},
                    {cost: "13,131"},
                    {cost: "24,242"},
                    {cost: "34,343"},
                    {cost: "43,434"},
                    {cost: "55,555"},
                    {cost: "66,666"},
                ]
            },
            {
                packagename: "Dual Visa Package",
                costs:[
                    {cost: "2"},
                    {cost: "21,212"},
                    {cost: "39,393"},
                    {cost: "58,585"},
                    {cost: "73,737"},
                    {cost: "85,858"},
                    {cost: "94,949"},
                ]
            },
            {
                packagename: "Trinity Visa Package",
                costs:[
                    {cost: "3"},
                    {cost: "24,242"},
                    {cost: "46,464"},
                    {cost: "67,676"},
                    {cost: "86,868"},
                    {cost: "99,999"},
                    {cost: "111,111"},
                ]
            },
            {
                packagename: "Quad Visa Package",
                costs:[
                    {cost: "4"},
                    {cost: "29,292"},
                    {cost: "56,565"},
                    {cost: "82,828"},
                    {cost: "101,010"},
                    {cost: "117,711"},
                    {cost: "133,331"},
                ]
            }
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <table className="ajman-comp-cost-tbl">
                        <tbody>
                            <tr>
                                <th>PACKAGES</th>
                                {packageData[0].visatype.map((visatype, index) =>
                                    <th key={index}>{visatype.name}</th>
                                )}
                            </tr>
                            {packageDetails.map((pname,index) =>
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
                <h5>All Visa Packages Include the Following: </h5>
                <p>● Business License  ● Co-working Space with Lease Agreement ● Memorandum and Articles of Association  ● Commercial Registry Certificate  ● Certificate of Incorporation  ● Share Certificate ● Establishment Card ● E-Channel Registration ● Investor Security Approval  ● UAE Residency Including Medical and Emirates ID ● Visa Status Change</p>
            </div>
        </>
    )
}
export default CompanysetupCost
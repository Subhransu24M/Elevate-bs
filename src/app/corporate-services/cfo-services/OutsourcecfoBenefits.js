import { MdDoubleArrow } from "react-icons/md";
// import Link from "next/link";

const OutsourcecfoBenefits = () => {
    const outsourcecfoBenefits = [
        { points: "You don’t pay Salary to a high profiled financial person as your CFO." },
        { points: "You pay to a team -a company, that team works for you as CFO." },
        { points: "No fear when anyone is leaving the job from the team- from the outsourced company." },
        { points: "A team serves you, so the collective experience is more effective than a individual’s expertise." },
        { points: "A team from Auditing and Outsourced Accounting Industry is with Elevate, having a thorough knowledge of diverse business of UAE." },
        { points: "Financial Reporting, Financial Forecasting, Risk Management & Compliance , Cost Optimization & all financial strategic decisions are our daily job to many sizable companies in UAE" },
        { points: "We at Elevate Accounting & Auditing are CFO for many global headquarter business in UAE." },
        { points: "We Majorly hire Chartered Accountants, CPA & MBA in Finance & as a team and spend descent amount to get our people trained then we deliver Outsource CFO Services from Elevate Accounting & Auditing." },

    ]
    return (
        <>

            {/* Button trigger modal */}
            <button type="button" className="cfo-benf-btn" data-bs-toggle="modal" data-bs-target="#outsourcecfoModal">Check the benefits of outsource CFO</button>

            {/* Modal  */}
            <div className="modal fade" id="outsourcecfoModal" tabindex="-1" aria-labelledby="outsourcecfoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="outsourcecfoModalLabel">Benefits of outsource CFO service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="outsource-cfo-benefitsblk">
                                <ul>
                                    {outsourcecfoBenefits.map((cfobenefits, cfoIndex) =>
                                        <li key={cfoIndex}><MdDoubleArrow />
                                            {cfobenefits.points}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutsourcecfoBenefits
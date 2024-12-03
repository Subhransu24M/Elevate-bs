import { MdDoubleArrow } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

const WhychoseelevateforCfo = () => {
    const choseelevateforCfo = [
        { points: "Framing business strategies and action plans." },
        { points: "Accelerating the implementation of strategies." },
        { points: "Preparing annual budgets and fostering performance management discipline." },
        { points: "Generating management information system (MIS) reports tailored to decision-making requirements." },
        { points: "Establishing and implementing effective cash flow policies." },
        { points: "Setting up internal control procedures to enhance departmental efficiency and productivity." },
        { points: "Creating budgetary control measures." },
        { points: "Enhancing financial discipline in working capital management." },
        { points: "Offering professional guidance for business planning and forecasting." },
        { points: "Reviewing contracts and negotiating beneficial terms and conditions." },
        { points: "Budget preparation and monitoring." },
        { points: "Training and supporting accounting staff." },
        { points: "Handling insurance revisions and mitigating the risk of unexpected losses." },
        { points: "Collaborating and negotiating with bankers, attorneys, and business associates." },
        { points: "Enhancing debt collection and proper cash flow management." },
        { points: "Hiring right External Auditor." },
    ]
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="whychos-cfo-btn" data-bs-toggle="modal" data-bs-target="#whychooseelevatecfoModal">why choose Elevate <FaLocationArrow />
            </button>

            {/* Modal  */}
            <div className="modal fade" id="whychooseelevatecfoModal" tabindex="-1" aria-labelledby="whychooseelevatecfoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="whychooseelevatecfoModalLabel">Why Choose Elevate for CFO Services</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="whychooseelevate-cfo-benefitsblk">
                                <ul>
                                    {choseelevateforCfo.map((chooseelevate, chooseIndex) =>
                                        <li key={chooseIndex}><MdDoubleArrow />
                                            {chooseelevate.points}</li>
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
export default WhychoseelevateforCfo
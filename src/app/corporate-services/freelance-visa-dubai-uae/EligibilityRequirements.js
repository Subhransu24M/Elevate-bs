import { FaLongArrowAltRight } from "react-icons/fa";

const EligibilityRequirements = () => {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#elgreqModal">
                Check Eligibility
            </button>


            <div className="modal fade" id="elgreqModal" tabIndex="-1" aria-labelledby="elgreqModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="elgreqModalLabel">Eligibility Requirements for a Freelance Visa </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="req-mdl-blk">
                                <ul className="req-mdl-blk-ul">
                                    <li><FaLongArrowAltRight /> Minimum Age: 18 years old.</li>
                                    <li><FaLongArrowAltRight /> Valid Passport: With a validity of at least 6 months.</li>
                                    <li><FaLongArrowAltRight /> Educational Requirements: A bachelor's degree or relevant qualifications.</li>
                                    <li><FaLongArrowAltRight /> Financial Stability: Proof of financial stability or a minimum income requirement to sustain living in Dubai.</li>
                                    <li><FaLongArrowAltRight /> Health Insurance: Valid health insurance coverage in the UAE.</li>
                                </ul>
                                <div className="elgb-note-blk">
                                    <p className="elgb-note-p">
                                    Freelance visa Dubai requirements may differ slightly depending on the free zone or economic zone through which the application is made.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default EligibilityRequirements
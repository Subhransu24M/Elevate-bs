import { FaArrowRightLong } from "react-icons/fa6";


const OutsrcaccntBenifts = () => {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#outsrcbenfModal">
                Explore Benefits
            </button>


            <div className="modal fade" id="outsrcbenfModal" tabIndex="-1" aria-labelledby="outsrcbenfModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="outsrcbenfModalLabel">Why Outsource Restaurant Accounting Services in Abu Dhabi?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="outsourceblkcnt">
                                <ul className="outsourceblkcntul">
                                    <li><FaArrowRightLong />
                                     Better Supply Chain Management</li>
                                    <li><FaArrowRightLong />
                                     Effective Payroll Management</li>
                                    <li><FaArrowRightLong />
                                     Cash Flow Optimization</li>
                                    <li><FaArrowRightLong />
                                     Budget Creation</li>
                                    <li><FaArrowRightLong />
                                     Automation of Daily Sales</li>
                                    <li><FaArrowRightLong />
                                     Insightful Business Decisions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutsrcaccntBenifts
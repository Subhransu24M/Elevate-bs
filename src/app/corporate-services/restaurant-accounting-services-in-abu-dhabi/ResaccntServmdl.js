import { FaArrowRightLong } from "react-icons/fa6";

const ResaccntServmdl = () => {
    return (
        <>
            {/* Button trigger modal  */}
            <div className='resservabdbtn'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resabdservModal">
                Check our services
            </button>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="resabdservModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Accounting Services for Restaurants and Bars in Abu Dhabi</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='resabdservlistblk'>
                                <div className='resabdservlst'>
                                    <ul className='resabdservlstul'>
                                        <li><FaArrowRightLong /> Setting Up Accounting Systems</li>
                                        <li><FaArrowRightLong /> Daily Business Transactions</li>
                                        <li><FaArrowRightLong /> Receipt and Payment Allocation</li>
                                        <li><FaArrowRightLong /> Bank Reconciliation</li>
                                        <li><FaArrowRightLong /> Audit Coordination</li>
                                        <li><FaArrowRightLong /> Budgets and Forecasts</li>
                                        <li><FaArrowRightLong /> Management Reports</li>
                                        <li><FaArrowRightLong /> Financial Statements</li>
                                        <li><FaArrowRightLong /> Expense Reporting</li>
                                        <li><FaArrowRightLong /> General Ledger Reconciliations</li>
                                        <li><FaArrowRightLong /> Revenue Categorization</li>
                                        <li><FaArrowRightLong /> Sales Reconciliation</li>
                                        <li><FaArrowRightLong /> Comprehensive Reports</li>     	
                                    </ul>
                                </div>
                                <div className='resabdservlst'>
                                    <ul className='resabdservlstul'>
                                    
                                        <li><FaArrowRightLong /> Data Backup</li>
                                        <li><FaArrowRightLong /> Payroll System Setup</li>	
                                        <li><FaArrowRightLong /> Accounts Management</li>
                                        <li><FaArrowRightLong /> Aged Payables and Receivables</li>
                                        <li><FaArrowRightLong /> Financial Review</li>
                                        <li><FaArrowRightLong /> Financial Presentations</li>
                                        <li><FaArrowRightLong /> VAT Returns</li>
                                        <li><FaArrowRightLong /> Audit Reconciliation</li>
                                        <li><FaArrowRightLong /> Department Coordination</li>
                                        <li><FaArrowRightLong /> POS Integration</li>
                                        <li><FaArrowRightLong /> Ratio and Break-Even Analysis</li>
                                        <li><FaArrowRightLong /> Labor and Food Reports</li>
                                        <li><FaArrowRightLong /> Custom Reports</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResaccntServmdl
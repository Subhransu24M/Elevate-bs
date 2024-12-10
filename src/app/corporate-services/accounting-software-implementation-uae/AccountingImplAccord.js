
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const AccountingImplAccord = () => {
  return (
    <>
    <div id="accordion">
                <div className="card">
                    <div className="card-header acnt-impl-hdr" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link acnt-impl-btn" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Efficiency and Automation <MdOutlineKeyboardArrowDown />
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="card-body acnt-impl-bdy">
                        A robust accounting software automates various financial processes, reducing manual data entry and minimizing errors. This efficiency frees up valuable time for employees to focus on more strategic tasks.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header acnt-impl-hdr" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link acnt-impl-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accurate Financial Data <MdOutlineKeyboardArrowDown />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="card-body acnt-impl-bdy">
                        Reliable accounting software ensures that your financial data is accurate and up-to-date. This accuracy is crucial for making informed business decisions and maintaining compliance with regulations.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header acnt-impl-hdr" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link acnt-impl-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Improved Financial Reporting <MdOutlineKeyboardArrowDown />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="card-body acnt-impl-bdy">
                        Good accounting software provides tools for generating comprehensive financial reports and analytics, enabling you to gain insights into your company's financial health and performance.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header acnt-impl-hdr" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link acnt-impl-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Cost Savings <MdOutlineKeyboardArrowDown />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                        <div className="card-body acnt-impl-bdy">
                        By streamlining financial processes and reducing the need for manual intervention, accounting software can lead to cost savings in terms of time, labor, and potential error-related expenses.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header acnt-impl-hdr" id="headingFive">
                        <h5 className="mb-0">
                            <button className="btn btn-link acnt-impl-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Scalability <MdOutlineKeyboardArrowDown />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                        <div className="card-body acnt-impl-bdy">
                        As your business grows, a flexible accounting software system can easily adapt to accommodate increasing data and transaction volumes, ensuring that your financial operations remain efficient and effective.
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AccountingImplAccord
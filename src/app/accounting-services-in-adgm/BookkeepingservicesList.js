import { MdDoubleArrow } from "react-icons/md";
import bookimg from './images/accounting-bookeeping.jpg';
import Image from "next/image";
const BookkeepingservicesList = () => {
    const bookingservicesList = [
        { points: "Preparing Financial Statements." },
        { points: "Managing Cost." },
        { points: "Computerized accounting system analysis and installation." },
        { points: "Budgeting & Financial Forecasting." },
        { points: "Managing Accounts Receivable." },
        { points: "Managing Accounts Payables." },
        { points: "Verification and valuation of inventory." },
        { points: "Preparation of monthly bank reconciliation statements." },
        { points: "Payroll Processing." },
        { points: "Banking and Credit card reconciliation." },
        { points: "Supervision & review of financial accounting records." },
    ]

    const bookingservicesNeeds = [
        { points: "Preparing Financial Statements." },
        { points: "Managing Cost." },
        { points: "Invoicing" },
        { points: "Computerized Accounting System Analysis and Installation." },
        { points: "Budgeting & Financial Forecasting." },
        { points: "Managing Accounts Receivable." },
        { points: "Managing Accounts Payables." },
        { points: "Verification and Valuation of Inventory." },
        { points: "Preparation of Monthly Bank Reconciliation Statements." },
        { points: "Payroll Processing." },
        { points: "Banking and Credit Card Reconciliation." },
        { points: "Supervision & Review of Financial Accounting Records." },
        { points: "Maintain Accurate Records." },
        { points: "Bank Accounts Management." },
        { points: "Compliance with Laws." },
        { points: "Tax Readiness." },
        { points: "Effective Invoicing." },
        { points: "Management of Invoices." },
        { points: "Foreign Currency Transactions." },
        { points: "Cash Flow Maintenance." },
        { points: "Books Ready for Accountants." },
    ]

    const bookingservicesRoles = [
        { points: "Identifying and addressing any potential fraud." },
        { points: "Spotting inaccuracies in transaction data." },
        { points: "Evaluating financial reports for insights." },
        { points: "Finding and correcting errors and inefficiencies." },
        { points: "Implementing controls to safeguard financial integrity." },
        { points: "Accurately recording and managing financial transactions." },
        { points: "Adhering to local financial regulations and standards." },
        { points: "Keeping precise and detailed financial records." },
        { points: "Offering financial information for strategic decisions." },
        { points: "Handling accounts payable and receivable." },
        { points: "Providing expert recommendations and financial guidance." },
        { points: "Reconciling and tracking bank transactions." },
        { points: "Supporting budgeting and cost control measures." },
        { points: "Creating statements for stakeholders." },
        { points: "Overseeing liquidity and cash flow management." },
        { points: "Supporting business expansion and development." },
    ]

    return (
        <>

        <div className="why-need-accnt-adgm-blk">
            <div className="container">
                <div className="row">
                    <div className="why-need-acnt-adgm-tlt">
                    <h2>Why Do You Need Accounting and Bookkeeping Services in ADGM?</h2>
                    </div>
                    <div className="why-need-acnt-adgm-p">
                    <p>In the bustling business hubs of Dubai and Abu Dhabi, effective management of accounting and bookkeeping is essential for maintaining financial health and ensuring compliance. Outsourcing to expert bookkeeping and accounting firms in Abu Dhabi offers critical advantages. Professional accounting services in Abu Dhabi ensure precise record-keeping and adherence to legal standards, while bookkeeping services in Abu Dhabi streamline financial management. Here’s why leveraging these services is a strategic move for your business:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                        <div className="why-need-acnt-adgm-img">
                            <img src="/images/adgm/adgm-accounting.jpg" alt="accounting services in adgm" loading="lazy" fetchPriority="high"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                    <div className="book-services-list-blk-why">
                                <ul>
                                    {bookingservicesNeeds.map((needs, needsIndex) =>
                                        <li className="book-services-list" key={needsIndex}>
                                            <MdDoubleArrow /> {needs.points}
                                        </li>
                                    )}
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="book-services-main-needs">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <h2>Role of Accounting Firms in Abu Dhabi</h2>
                            <p>Bookkeeping and Accounting firms in Abu Dhabi are essential for keeping your financial records accurate and up-to-date, while ensuring transparency and compliance. Top accounting firms in Abu Dhabi offer a range of crucial services, including:</p>
                            <div className="book-services-list-blk-role">
                                <ul>
                                    {bookingservicesRoles.map((roles, rolesIndex) =>
                                        <li className="book-services-list" key={rolesIndex}>
                                            <MdDoubleArrow /> {roles.points}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <img  className="adgm-accnt-snd-img" src="/images/adgm/adgm-accounting-2.jpg" alt="accounting and bookkeeping service in adgm" loading="lazy" fetchPriority="high" />
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookkeepingservicesList

import { BsCheck2Square } from "react-icons/bs";
const BnkAccnModal1 = () => {
    return (
        <>
            <button type="button" className="btn btn-primary tax-cons-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Check Now
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title bnk-accn-mdl-tlt" id="exampleModalLabel">Documents Required</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body bnk-accn-mdl-cnt">
                            <ul>
                                <li><BsCheck2Square className='long-arrow' /> Copy of trade license.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of MOA/AOA.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of the share certificate(s).</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of Incorporation Certificate/Registration Certificate.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of passport with UAE entry stamp page of shareholders.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of Emirates ID of shareholders (if the shareholders have UAE residency).</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of the Visa page of shareholders (if the shareholders have UAE residency).</li>
                                <li><BsCheck2Square className='long-arrow' /> List of few prospective clients / or existing clients (suppliers/buyers).</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of the last 6 months' bank statement of the shareholders.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of the utility bill of the shareholders showing the proof of address.</li>
                                <li><BsCheck2Square className='long-arrow' /> Copy of corporate legal documents and bank statements (if the shareholder having company outside UAE).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BnkAccnModal1
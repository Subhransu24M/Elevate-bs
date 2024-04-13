
import { BsCheck2Square } from "react-icons/bs";
const BnkAccnModal2 = () => {
    return (
        <>
            <button type="button" className="btn btn-primary tax-cons-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Check Now
            </button>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title bnk-accn-mdl-tlt" id="exampleModalLabel">Benefits</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body bnk-accn-mdl-cnt">
                            <ul>
                                <li><BsCheck2Square className='long-arrow' /> Proper control of Incoming payments from domestic and overseas clients.</li>
                                <li><BsCheck2Square className='long-arrow' /> Building a reputation with the bank to avail any future credit facility.</li>
                                <li><BsCheck2Square className='long-arrow' /> Access to several Business banking services like trade finance, corporate Credit Card, Company Car finance.</li>
                                <li><BsCheck2Square className='long-arrow' /> Robust financial system and tailored banking services.</li>
                                <li><BsCheck2Square className='long-arrow' /> Comprehensive wealth management solutions.</li>
                                <li><BsCheck2Square className='long-arrow' /> Confidentiality and data security for business transactions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BnkAccnModal2
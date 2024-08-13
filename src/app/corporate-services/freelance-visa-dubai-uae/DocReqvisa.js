
import { FaLongArrowAltRight } from "react-icons/fa";

const DocReqvisa = () => {
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#docreqModal">
                Check Required Documents
            </button>

            <div className="modal fade" id="docreqModal" tabIndex="-1" aria-labelledby="docreqModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="docreqModalLabel">Documents Required  for a Freelance Visa </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="req-mdl-blk">
                                <ul className="req-mdl-blk-ul">
                                    <li><FaLongArrowAltRight /> <b>Passport Copy:</b> Clear and valid passport.</li>
                                    <li><FaLongArrowAltRight /> <b>Photographs:</b> Recent passport-sized photos.</li>
                                    <li><FaLongArrowAltRight /> <b>Educational Certificates:</b> Degrees or diplomas related to your field of work.</li>
                                    <li><FaLongArrowAltRight /> <b>Proof of Income:</b> Documentation showing proof of earnings or financial stability.</li>
                                    <li><FaLongArrowAltRight /> <b>Health Insurance:</b> Coverage valid in the UAE.</li>
                                </ul>
                                <div className="elgb-note-blk">
                                    <p className="elgb-note-p">
                                    Ensure all documents are up-to-date and translated into English if necessary.
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

export default DocReqvisa


const ComForDocModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary com-for-doc-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Check Document
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title com-for-doc-mdl-tlt" id="exampleModalLabel">Documents Required for Company Formation in Dubai, UAE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body com-for-doc-mdl-cnt">
                            <ul>
                                <li>Passport copies of shareholders and directors</li>
                                <li>UAE residence visa copies (if applicable)</li>
                                <li>No Objection Certificate (NOC) from current sponsor (if residing in the UAE)</li>
                                <li>Business plan outlining company activities</li>
                                <li>Memorandum of Association (MOA) and Articles of Association (AOA)</li>
                                <li>Proof of reserved trade name</li>
                                <li>Lease agreement for office space</li>
                                <li>Passport-sized photographs of shareholders and directors</li>
                                <li>Bank reference letter</li>
                                <li>Initial approval certificate from relevant authorities</li>
                                <li>Share capital proof (if applicable)</li>
                                <li>Corporate nominee director documents (if applicable)</li>
                                <li>Legalization of foreign documents (if required)</li>
                                <li>Additional documents as per business activity and jurisdiction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ComForDocModal

const Modal2 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary trd-mark-mdl-btn" data-bs-toggle="modal" data-bs-target="#tradeModal2">Learn More</button>


            <div className="modal fade" id="tradeModal2" tabIndex="-1" role="dialog" aria-labelledby="tradeModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title trd-mark-mdl-tlt" id="tradeModalLabel">Company/Business</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body trd-mark-mdl-cnt">
                            <ul>
                                <li>Trademark in PDF file</li>
                                <li>Scanned copy of the Trade License</li>
                                <li>Scanned Passport copy of Authorised Signatory</li>
                                <li>Power of Attorney (Notarized by the Notary Public & legalized by the UAE)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Modal2
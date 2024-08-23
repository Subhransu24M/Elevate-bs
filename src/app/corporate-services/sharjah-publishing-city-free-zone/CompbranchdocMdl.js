
const CompbranchdocMdl = () => {
  return (
    <>
       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#spccompbranchdocModal">
                Check Documents
            </button>


            <div className="modal fade" id="spccompbranchdocModal" tabIndex="-1" aria-labelledby="spccompbranchdocModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="spccompbranchdocModalLabel">To Set Up a Branch of a Company</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="frezone-mdl-cnt">
                                <ul>
                                    <li> <i className="fa-solid fa-arrow-right-long"></i> Company Registration Form.</li>
                                    <li> <i className="fa-solid fa-arrow-right-long"></i> Owner Declaration Document.</li>
                                    <li> <i className="fa-solid fa-arrow-right-long"></i> Passport Copy & Photograph of the Manager.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Proof of Address of the Manager.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Attested Memorandum & Articles of Association of the Parent Company.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Attested Certificate of Incorporation of the Parent Company.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Attested Board Resolution and Power of Attorney of the Parent Company.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Attested Business License of the Parent Company.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CompbranchdocMdl
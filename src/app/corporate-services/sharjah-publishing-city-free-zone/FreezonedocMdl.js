

const FreezonedocMdl = () => {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#spcfrzndocModal">
                Check Documents
            </button>


            <div className="modal fade" id="spcfrzndocModal" tabIndex="-1" aria-labelledby="spcfrzndocModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="spcfrzndocModalLabel">To Set Up a Freezone Establishment (FZE)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="frezone-mdl-cnt">
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Application Form for Company Registration in SPC Free Zone.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Passport Copy of Shareholders, Directors, and Manager.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Visa & Emirates ID Copy of Shareholders, Directors, and Managers.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Proof of Address of Shareholders.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Passport Size Photograph of the Shareholder.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Memorandum & Articles of Association.</li>
                                    <li><i className="fa-solid fa-arrow-right-long"></i> Specimen Signature of the Proposed Manager.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreezonedocMdl
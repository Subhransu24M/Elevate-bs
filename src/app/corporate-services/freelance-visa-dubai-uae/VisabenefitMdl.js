

const VisabenefitMdl = () => {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dubaivisabenfModal">
                Check Now
            </button>

            <div className="modal fade" id="dubaivisabenfModal" tabIndex="-1" aria-labelledby="dubaivisabenfModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title dub-benf-mdl-tlt" id="dubaivisabenfModalLabel">Benefits of Holding a Freelance Visa in Dubai</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="dubvisbenfmdlblk">
                            <ul className="dubaivisabenful">
                                <li><b>Flexibility:</b> Enjoy the freedom to work on various projects without being tied to a single employer.</li>
                                <li><b>Networking Opportunities:</b> Connect with a diverse and dynamic community of freelancers and businesses.</li>
                                <li><b>Access to Co-working Spaces:</b> Utilize world-class co-working spaces and business centers.</li>
                                <li><b>Professional Development:</b> Attend workshops, seminars, and events to enhance your skills and knowledge.</li>
                                <li><b>Business Opportunities:</b> Tap into Dubai's booming market with numerous opportunities for growth and collaboration.</li>
                            </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisabenefitMdl
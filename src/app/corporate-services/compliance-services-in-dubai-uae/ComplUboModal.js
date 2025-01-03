import { CiLocationArrow1 } from "react-icons/ci";
const ComplUboModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary compl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal34">
                Read More <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal34" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title compl-btn-tlt" id="exampleModalLabel">Ultimate Beneficial Owner(UBO)-  </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body compl-btn-cnt">
                            <p>
                            The United Arab Emirates has replaced Cabinet Resolution No. 34 of 2020 with Cabinet Resolution No. (58) of 2020, which governs Beneficial Owner Procedures. This updated Resolution aims to ensure greater transparency among UAE-registered entities by requiring them to disclose their Real Beneficiaries or Ultimate Beneficial Owners, aligning with international standards. The objectives of the Ultimate Beneficial Owner (UBO) framework include meeting international economic requirements, setting minimum disclosure obligations for Beneficial Owners, Shareholders, Partners, and Nominee Board Members, and establishing an effective regulatory mechanism to combat Money Laundering and Terrorist Financing.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default ComplUboModal

import { CiLocationArrow1 } from "react-icons/ci";
const ElvBrandRepModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary vat-reg-modal2-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
    Check now <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title vat-reg-doc-modal-tlt" id="exampleModalLabel3">Elevated Brand Reputation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body ">
                            <div className="vat-reg-doc-modal-ul">
                                <p>In the UAE, VAT registration isn't universally mandated. However, opting for registration reaps an array of rewards. Foremost among these is the elevation of your brand reputation. By being VAT-registered, even a smaller enterprise can exude an air of prestige, credibility, and establishment.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default ElvBrandRepModal
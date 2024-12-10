import { CiLocationArrow1 } from "react-icons/ci";
const DistinctVatRegModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary vat-reg-modal2-btn" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                Check now <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title vat-reg-doc-modal-tlt" id="exampleModalLabel">Distinct VAT Registration Number</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body ">
                            <div className="vat-reg-doc-modal-ul">
                                <p>Possessing a VAT registration number holds intrinsic value for your business. Displaying this number on your official documents and website can serve as a powerful business asset. Notably, it can enhance your brand's standing, bolstering credibility, and fostering trust among potential clientele.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default DistinctVatRegModal
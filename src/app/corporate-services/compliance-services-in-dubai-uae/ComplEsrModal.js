
import { CiLocationArrow1 } from "react-icons/ci";
const ComplEsrModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary compl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal33">
                Read More <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal33" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title compl-btn-tlt" id="exampleModalLabel">Economic Substance Reporting(ESR)-  </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body compl-btn-cnt">
                            <p>
                            The UAE government introduced the Economic Substance Regulations (ESR) on April 30, 2019, through Resolution No. 31/2019. These regulations were put in place to align with the OECD Inclusive Framework and address concerns raised by the European Union Code of Conduct Group on Business Taxation regarding the UAE's tax framework. ESR applies to specific business activities like banking, insurance, and shipping, whether conducted in Freezone or Mainland jurisdictions.These regulations are applicable to all UAE-based entities, including onshore and free zone companies, branches, representative offices, and other licensed business entities involved in one or more of the "Relevant Activities" that generate revenue.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default ComplEsrModal
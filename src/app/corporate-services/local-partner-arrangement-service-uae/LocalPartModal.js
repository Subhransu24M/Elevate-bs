
import { BsCheck2Square } from "react-icons/bs";
const LocalPartModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary lcl-part-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Responsibilities of a Local Sponsor or Local Service Agent in Dubai
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Responsibilities of a Local Sponsor or Local Service Agent in Dubai</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>A local sponsor or local service agent in Dubai has several responsibilities, including:</p>
                              <ul className="lcl-part-mdl-ul">
                                <li><BsCheck2Square/> Managing the cancellation of employees' work visas.</li>
                                <li><BsCheck2Square/> Handling the cancellation of labor status for employees.</li>
                                <li><BsCheck2Square/> Closing bank accounts related to the business.</li>
                                <li><BsCheck2Square/> Settling any outstanding debts if applicable.</li>
                                <li><BsCheck2Square/> Facilitating interactions with government officials and ministries on behalf of the business.</li>
                                <li><BsCheck2Square/> Interpreting business contracts in Arabic, as a local authority is required to understand and interpret these documents and can sign them on behalf of their foreign business partner.</li>
                                
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LocalPartModal
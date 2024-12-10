import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineDoubleArrow } from "react-icons/md";

const ComForDocModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary com-for-doc-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Check Document <CiLocationArrow1 />
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog cmp-for-popmodal" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title com-for-doc-mdl-tlt" id="exampleModalLabel">Documents Required for Company Formation in Dubai, UAE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body com-for-doc-mdl-cnt">
                            <ul>
                                <li><MdOutlineDoubleArrow /> Passport copies of shareholders and directors</li>
                                <li><MdOutlineDoubleArrow /> UAE residence visa copies (if applicable)</li>
                                <li><MdOutlineDoubleArrow /> No Objection Certificate (NOC) from current sponsor (if residing in the UAE)</li>
                                <li><MdOutlineDoubleArrow /> Business plan outlining company activities</li>
                                <li><MdOutlineDoubleArrow /> Memorandum of Association (MOA) and Articles of Association (AOA)</li>
                                <li><MdOutlineDoubleArrow /> Proof of reserved trade name</li>
                                <li><MdOutlineDoubleArrow /> Lease agreement for office space</li>
                                <li><MdOutlineDoubleArrow /> Passport-sized photographs of shareholders and directors</li>
                                <li><MdOutlineDoubleArrow /> Bank reference letter</li>
                                <li><MdOutlineDoubleArrow /> Initial approval certificate from relevant authorities</li>
                                <li><MdOutlineDoubleArrow /> Share capital proof (if applicable)</li>
                                <li><MdOutlineDoubleArrow /> Corporate nominee director documents (if applicable)</li>
                                <li><MdOutlineDoubleArrow /> Legalization of foreign documents (if required)</li>
                                <li><MdOutlineDoubleArrow /> Additional documents as per business activity and jurisdiction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ComForDocModal
import { CiLocationArrow1 } from "react-icons/ci";
const Liquidationmodal2 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary lqd-mdlbtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Learn More <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lqd-mdl-tlt" id="exampleModalLabel2">Compulsory Liquidation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body lqd-mdl-cnt">
                            <p>Compulsory liquidation, also referred to as forceful liquidation, is enforced when a company violates the law or becomes insolvent, hindering its ability to continue business operations. Additionally, creditors can file complaints against the company to regulatory authorities to claim their receivables. Local authorities take action to forcefully liquidate the company and assist creditors in recovering their money.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Liquidationmodal2
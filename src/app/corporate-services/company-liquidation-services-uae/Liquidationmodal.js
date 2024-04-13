

const Liquidationmodal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary lqd-mdlbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Learn More
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lqd-mdl-tlt" id="exampleModalLabel">Voluntary Liquidation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body lqd-mdl-cnt">
                            <p>Voluntary liquidation, also known as shareholders liquidation, is initiated by the shareholders of a company. This process is triggered by various reasons such as the expiry of the fixed duration, achieving the purpose of the company formation, termination of the objects, merger with another company, continuous business losses, or inability to pay debts. Shareholders opt to dissolve the company to prevent further losses.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Liquidationmodal
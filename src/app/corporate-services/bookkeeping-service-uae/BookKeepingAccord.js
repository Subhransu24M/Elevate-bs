import { BsFillArrowDownSquareFill } from "react-icons/bs";
const BookKeepingAccord = () => {
  return (
    <>
    <div id="accordion">
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Cost Efficiency <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span></button> 
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>Outsourcing bookkeeping services in Dubai, UAE can reduce operational costs significantly by eliminating the need for in-house staff, training, and infrastructure, allowing businesses to allocate resources more efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Expertise and Accuracy <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>Professional bookkeeping firms in Dubai bring a wealth of expertise and experience, ensuring accurate financial records, compliance with local regulations, and timely reporting.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Focus on Core Activities <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>Outsourcing bookkeeping enables businesses to concentrate on their core operations, enhancing productivity and growth opportunities, while leaving financial tasks to specialists.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="heading4">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Focus on Core Activities <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>Outsourcing bookkeeping enables businesses to concentrate on their core operations, enhancing productivity and growth opportunities, while leaving financial tasks to specialists.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="heading5">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            Scalability <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapse5" className="collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>Bookkeeping services can be scaled up or down as per business needs, making it flexible and adaptable to changing financial requirements and business expansion.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bkp-accord-blk-cnt" id="heading6">
                        <h5 className="mb-0">
                            <button className="btn btn-link bkp-accord-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            Reduced Errors <span className="bkp-accrd-arw-icon"><BsFillArrowDownSquareFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapse6" className="collapse" aria-labelledby="heading6" data-bs-parent="#accordion">
                        <div className="card-body bkp-accord-cardbd-cnt">
                            <p>With expert bookkeepers handling financial records, the risk of errors, fraud, and non-compliance is minimized, enhancing the overall financial security and stability of the business.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BookKeepingAccord
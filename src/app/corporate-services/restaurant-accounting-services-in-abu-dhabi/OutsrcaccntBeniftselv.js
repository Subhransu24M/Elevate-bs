import { FaArrowRightLong } from "react-icons/fa6";

const OutsrcaccntBeniftselv = () => {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#outsrcelvModal">
                Why Choose Elevate
            </button>


            <div className="modal fade" id="outsrcelvModal" tabIndex="-1" aria-labelledby="outsrcelvModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="outsrcelvModalLabel">Benefits of Outsourcing Your Accounting Service to Elevate</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="outsrcelvcnt">
                                <ul className="outsrcelvcntul">
                                    <li><FaArrowRightLong /> Tailor-made accounting services to fit your unique needs.</li>
                                    <li><FaArrowRightLong /> Experienced professionals in restaurant and hospitality accounting.</li>
                                    <li><FaArrowRightLong /> Flexible payment options: pay-as-you-go, hourly, daily, weekly, monthly, or one-off.</li>
                                    <li><FaArrowRightLong /> Focus on core activities while we manage your financials.</li>
                                    <li><FaArrowRightLong /> Regular reviews to ensure adherence to tax laws.</li>
                                    <li><FaArrowRightLong /> Weekly, monthly, or annual financial performance evaluations.</li>
                                    <li><FaArrowRightLong /> Advanced tools for accurate bookkeeping and reporting.</li>
                                    <li><FaArrowRightLong /> Strict confidentiality and data protection measures.</li>
                                    <li><FaArrowRightLong /> Industry-standard processes for better financial control.</li>
                                    <li><FaArrowRightLong /> Round-the-clock assistance for any accounting issues.</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutsrcaccntBeniftselv
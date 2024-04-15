
import { FaLongArrowAltRight } from "react-icons/fa";
const TaxModal2 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary tax-cons-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Learn more
            </button>


            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title tax-cons-mdl-tlt" id="exampleModalLabel">VALUE-ADDED TAX (VAT):</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body tax-cons-mdl-cnt">
                            <p>VAT, implemented on January 1, 2018, is an indirect tax on goods and services. The UAE's decision to introduce VAT aligns with its strategy to diversify funding sources beyond oil. The VAT rate is 5% for a range of products.</p>
                            <h6>Zero-Rated Supplies Include:</h6>
                            <ul>
                                <li><FaLongArrowAltRight/>Medical Supplies and Equipment.</li>
                                <li><FaLongArrowAltRight/>Trading in gold, silver, and platinum.</li>
                                <li><FaLongArrowAltRight/>Natural Gases and Crude Oil.</li>
                                <li><FaLongArrowAltRight/>First-time residential sales.</li>
                                <li><FaLongArrowAltRight/>Healthcare.</li>
                                <li><FaLongArrowAltRight/>Exports and international transportation.</li>
                                <li><FaLongArrowAltRight/>Education.</li>
                            </ul>
                            <h6>Exempt Supplies Include:</h6>
                            <ul>
                                <li><FaLongArrowAltRight/>Specific financial services as per VAT legislation.</li>
                                <li><FaLongArrowAltRight/>Residential real estate.</li>
                                <li><FaLongArrowAltRight/>Vacant land.</li>
                                <li><FaLongArrowAltRight/>Local passenger services.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TaxModal2

import { FaLongArrowAltRight } from "react-icons/fa";
const TaxModal3 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary tax-cons-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Learn more
            </button>


            <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title tax-cons-mdl-tlt" id="exampleModalLabel">EXCISE TAX</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body tax-cons-mdl-cnt">
                            <p>Excise tax is applied to items considered harmful to individuals or the environment. Excisable goods include:</p>
                            <ul>
                                <li><FaLongArrowAltRight/>Tobacco-based products.</li>
                                <li><FaLongArrowAltRight/>Carbonated beverages excluding plain aerated water.</li>
                                <li><FaLongArrowAltRight/>Electronic smoking devices and equipment.</li>
                                <li><FaLongArrowAltRight/>Sweetened beverages.</li>
                                <li><FaLongArrowAltRight/>Energy drinks containing stimulant ingredients.</li>
                            </ul>
                            <h6>Items Exempt from Excise Tax in the UAE:</h6>
                            <ul>
                                <li><FaLongArrowAltRight/>Beverages designed for specific dietary needs (GCC Standardization Org. Standard 654).</li>
                                <li><FaLongArrowAltRight/>Medicinal purpose beverages (GCC Standardization Org. Standard 1366).</li>
                                <li><FaLongArrowAltRight/>Ready-to-drink beverages with at least 75% milk or milk substitutes.</li>
                                <li><FaLongArrowAltRight/>Baby formula or baby food.</li>
                            </ul>
                            <h6>Excise Tax Rates in the UAE:</h6>
                            <ul>
                                <li><FaLongArrowAltRight/>100% on tobacco products.</li>
                                <li><FaLongArrowAltRight/>100% on e-cigarettes and accessories.</li>
                                <li><FaLongArrowAltRight/>50% on carbonated beverages.</li>
                                <li><FaLongArrowAltRight/>50% on products with added sugar or sweeteners.</li>
                                <li><FaLongArrowAltRight/>100% on energy drinks.</li>
                            </ul>
                            <p>The UAE's tax landscape reflects a deliberate effort to attract businesses while adapting to fiscal needs and international standards.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TaxModal3

import { FaLongArrowAltRight } from "react-icons/fa";
const TaxModal1 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary tax-cons-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Learn more
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title tax-cons-mdl-tlt" id="exampleModalLabel">CORPORATE TAX</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body tax-cons-mdl-cnt">
                            <p>Starting from June 1, 2023, the UAE has introduced a corporate tax on business profits. The outlined corporate tax rates are as follows:</p>
                            <ul>
                                <li>No tax on taxable income up to AED 375,000.</li>
                                <li>Taxable income exceeding AED 375,000 is subject to a 9% tax rate.</li>
                            </ul>
                            <h6>Non-Taxable Income & Exemptions:</h6>
                            <ul>
                                <li><FaLongArrowAltRight/>Businesses engaged in commercial activities and natural resource exploitation.</li>
                                <li><FaLongArrowAltRight/>No withholding taxes on domestic and cross-border payments.</li>
                                <li><FaLongArrowAltRight/>Individuals receiving dividends, capital gains, or other forms of income from their own shareholdings or assets.</li>
                                <li><FaLongArrowAltRight/>Individuals earning interest and other income from bank accounts or savings plans.</li>
                                <li><FaLongArrowAltRight/>Salary or employment income of individuals.</li>
                                <li><FaLongArrowAltRight/>Dividends and capital gains from qualifying shareholdings in UAE companies.</li>
                                <li><FaLongArrowAltRight/>Intra-group transfers and qualifying reorganizations.</li>
                                <li><FaLongArrowAltRight/>Individuals not needing a company license can invest in UAE real estate in a personal capacity.</li>
                            </ul>
                            <p>
                            Navigating this tax landscape requires expert guidance. Elevate, as one of the Best Corporate Tax Consultants in Dubai, UAE, stands ready to provide comprehensive support tailored to your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TaxModal1
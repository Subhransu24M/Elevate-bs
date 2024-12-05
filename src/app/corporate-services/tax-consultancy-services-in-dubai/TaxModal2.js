
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
                            <h6><strong>Zero-Rated Supplies Include:</strong></h6>
                            <ul>
                                <li>Medical Supplies and Equipment.</li>
                                <li>Trading in gold, silver, and platinum.</li>
                                <li>Natural Gases and Crude Oil.</li>
                                <li>First-time residential sales.</li>
                                <li>Healthcare.</li>
                                <li>Exports and international transportation.</li>
                                <li>Education.</li>
                            </ul>
                            <h6><strong>Exempt Supplies Include:</strong></h6>
                            <ul>
                                <li>Specific financial services as per VAT legislation.</li>
                                <li>Residential real estate.</li>
                                <li>Vacant land.</li>
                                <li>Local passenger services.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TaxModal2
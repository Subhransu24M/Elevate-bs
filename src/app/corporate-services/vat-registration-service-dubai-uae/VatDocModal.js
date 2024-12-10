import { CiLocationArrow1 } from "react-icons/ci";
const VatDocModal = () => {
    return (
        <>
            <button type="button" className="btn btn-primary vat-reg-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Check now <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title vat-reg-doc-modal-tlt" id="exampleModalLabel">Required documents for VAT registration in UAE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                        </div>
                        <div className="modal-body ">
                            <div className="vat-reg-doc-modal-ul">
                                <ul>
                                    <li>A copy of the company's trade license.</li>
                                    <li>A valid passport copy or Emirates ID to verify the identity of the authorized representative.</li>
                                    <li>The Certificate of Articles of Association outlining the company's structure and activities.</li>
                                    <li>A comprehensive description of the company's business activities.</li>
                                    <li>Supporting documentation reflecting sales over the past 12 months.</li>
                                    <li>Anticipated turnover projections for the upcoming 30 days.</li>
                                    <li>Estimated annual export value to all GCC countries.</li>
                                    <li>If applicable, supporting records for customs registration within the Emirates.</li>
                                    <li>The company's Certificate of Incorporation.</li>
                                    <li>The Certificate of Power of Attorney granted to the company.</li>
                                    <li>Financial data indicating the turnover for the preceding 12 months in AED.</li>
                                    <li>Anticipated annual import value from all GCC countries.</li>
                                    <li>Specifics of the company's bank account.</li>
                                    <li>Your explicit agreement on whether you engage with GCC suppliers or customers.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default VatDocModal
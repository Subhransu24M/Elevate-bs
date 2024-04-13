
import { BsFileArrowDownFill } from "react-icons/bs";
const LocalPartnerComp = () => {
  return (
    <>
    <div id="accordion">
                <div className="card">
                    <div className="card-header lcl-part-acrd-tlt" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link lcl-part-acrd-btn" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Corporate Local Sponsor <span className="lcl-part-acrd-icon"><BsFileArrowDownFill /></span>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="card-body lcl-part-acrd-cnt">
                        A corporation licensed in Dubai must have a local sponsor, who holds 51% of the company's shares, while the remaining shares are owned by individuals or a group of expats. Corporate sponsors can be from various local or government authorities, depending on the nature of the business.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header lcl-part-acrd-tlt" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link lcl-part-acrd-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Individual Local Sponsor <span className="lcl-part-acrd-icon"><BsFileArrowDownFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="card-body lcl-part-acrd-cnt">
                        In this case, an individual Emirati national sponsors the business and holds a 51% stake in the company. Individual sponsors must be UAE citizens and can be either male or female. They may not necessarily be involved in business activities.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header lcl-part-acrd-tlt" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link lcl-part-acrd-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Local Service Agent as Sponsor <span className="lcl-part-acrd-icon"><BsFileArrowDownFill /></span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="card-body lcl-part-acrd-cnt">
                        The third type of local sponsor is a service agent who is a local resident and acts as the representative of the company without holding any shares. This type of sponsorship is suitable for opening professional businesses in Dubai.
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LocalPartnerComp
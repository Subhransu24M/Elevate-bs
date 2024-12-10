import { CiLocationArrow1 } from "react-icons/ci";
const ComplAmlModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary compl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal35">
                Read More <CiLocationArrow1 />
            </button>


            <div className="modal fade" id="exampleModal35" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title compl-btn-tlt" id="exampleModalLabel">Anti Money Laundering Compliance(AML)-   </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body compl-btn-cnt">
                            <p>
                            Money laundering is the covert and unlawful process of concealing ill-gotten gains, whether by individuals or organizations, with the aim of acquiring assets, property, or services for personal or business advantages. Compliance with UAE Law No. 20 of 2018 on AML is obligatory for various entities, including accountants, auditors, real estate agents, precious metal dealers, and corporate service providers. The UAE is dedicated to global AML and CFT efforts, aligning with international standards set by the Financial Action Task Force (FATF). This federal law applies not only to financial institutions but also to designated non-financial businesses and professions (DNFBPs).
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default ComplAmlModal
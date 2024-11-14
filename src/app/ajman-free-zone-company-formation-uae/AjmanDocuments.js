import { BsArrowRight } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";

const AjmanDocuments = () => {
    const companyDocuments = [
        {
            title: "Free Zone Establishment (FZE)",
            documents: [
                {points: "Valid Passport Copy"},
                {points: "Color Photograph"},
                {points: "No Objection Letter"},
                {points: "Feasibility Study"},
                {points: "No Capital Deposit Required"},
            ]
        },
        {
            title: "Free Zone Company (FZC)",
            documents: [
                {points: "Valid Passport Copy"},
                {points: "Color Photograph"},
                {points: "No Objection Letter"},
                {points: "Feasibility Study"},
                {points: "No Capital Deposit Required"},
            ]
        },

        {
            title: "Branch of a Local Company",
            documents: [
                {points: "Valid Passport Copy"},
                {points: "Color Photograph"},
                {points: "No Objection Letter"},
                {points: "Feasibility Study"},
                {points: "No Capital Deposit Required"},
            ]
        },
        {
            title: "Branch of a Foreign Company",
            documents: [

                {points: "Valid Passport Copy"},
                {points: "Color Photograph"},
                {points: "Registration Certificate"},
                {points: "Contract of Association"},
                {points: "Resolution"},
                {points: "Power of Attorney"},
                {points: "Feasibility Study"},
            ]
        }
    ];

    return (
        <>
            <div className="documentsbox">
                <div className="container">
                    <h2>Documentation for Company Formation In Ajman Free Zone</h2>
                    <p>To initiate your Ajman Free Zone company setup, you will need:</p>
                    <div className="row">
                        {companyDocuments.map((cdocuments, index) =>
                            <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12" key={index}>
                                <div className="ajman-docblk" key={index}>
                                <h5>{cdocuments.title}</h5>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                                <FaLocationArrow />

                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" role="dialog" aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-end pt-0 pb-0">
                                                <button type="button" className="close ajman-doc-box-clost-btn" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <ul className="ajman-doc-ul">
                                                    {cdocuments.documents.map((doc,docIndex) =>
                                                    <li key={docIndex}><BsArrowRight /> {doc.points}</li>
                                                    )}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}
export default AjmanDocuments
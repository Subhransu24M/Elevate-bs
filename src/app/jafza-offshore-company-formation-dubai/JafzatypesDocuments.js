import { HiMiniArrowLongRight } from "react-icons/hi2";
const JafzatypesDocuments = () =>{
    const jafzaTypes =[
        {points: "Banking"},
        {points: "Insurance"},
        {points: "International Trade"},
        {points: "Holding Companies"},
        {points: "Property Ownership"},
        {points: "Intellectual Property Registration"},
        {points: "International Consulting"},	
    ]

    const jafzaDocuments =[
        {points: "Copies of Passports"},
        {points: "Proof of Address"},
        {points: "Curriculum Vitae (CV)"},
        {points: "Proposed Company Name"},
        {points: "Specimen Signatures"},
        {points: "Draft Memorandum of Association (MOA) and Articles of Association (AOA)"},
        {points: "Board Resolution"},
        {points: "Parent Company Documents"},
        {points: "Lease Agreement"},
        {points: "Additional Documents requested by JAFZA"},	
    ]
 	 

    return (
        <>
        <div className="jafzatype-doc-blk">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="jafza-type-blk">
                            <h2>Types of Offshore Companies in JAFZA</h2>
                            <p>JAFZA offshore companies differ from mainland and free zone companies. They operate under specific regulations and cannot engage in business activities within the UAE. 
                            <span>Suitable types for JAFZA offshore companies include:</span></p>
                            <div className="jafza-ponts-blk">
                                <ul>
                                {jafzaTypes.map((types,index) =>
                                    <li key={index}><HiMiniArrowLongRight /> {types.points}</li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="jafza-doc-blk">
                            <h2>Document Requirements for JAFZA offshore company formation</h2>
                            <p>For JAFZA offshore company formation dubai, you will need to prepare and submit the following documents</p>
                            <div className="jafza-ponts-blk">
                                <ul>
                                    {jafzaDocuments.map((documents,docIndex) =>
                                    <li key={docIndex}><HiMiniArrowLongRight /> {documents.points}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default JafzatypesDocuments
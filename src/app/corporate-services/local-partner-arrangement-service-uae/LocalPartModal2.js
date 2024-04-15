
import { BsCheck2Square } from "react-icons/bs";
const LocalPartModal2 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary lcl-part-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Do I Need a Local Sponsor in Dubai?
            </button>


            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Do I Need a Local Sponsor in Dubai?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>If you are planning to establish a business in Dubai or any other part of the UAE mainland in certain industries, you will require a local sponsor or local service agent. These industries include:</p>
                              <ul className="lcl-part-mdl-ul">
                                <li><BsCheck2Square/> Oil exploration and production.</li>
                                <li><BsCheck2Square/> Security and military services.</li>
                                <li><BsCheck2Square/> Banking, financing, and insurance activities.</li>
                                <li><BsCheck2Square/> Pilgrimage and Umrah services.</li>
                                <li><BsCheck2Square/> Water and electricity provision.</li>
                                <li><BsCheck2Square/> Fishing and related services.</li>
                                <li><BsCheck2Square/> Post and telecoms services.</li>
                                <li><BsCheck2Square/> Road and air transport.</li>
                                <li><BsCheck2Square/> Printing and publishing.</li>
                                <li><BsCheck2Square/> Commercial agency.</li>
                                <li><BsCheck2Square/> Medical retail (including pharmacies).</li>
                                <li><BsCheck2Square/> Blood banks, quarantines, and venom/poison banks.</li>
                                <li><BsCheck2Square/> Outside of these industries and similar ones, you may have the opportunity to retain 100% ownership of your business, but you will need to apply to the Dubai Department of Economic Development (DED) for permission to trade.</li>  
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LocalPartModal2
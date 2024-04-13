import './itform.css';
import { FaRegBuilding, FaAddressCard, FaRegUser, FaLink, FaPhone, FaCogs } from "react-icons/fa";
const ItForm = () => {
  return (
    <>
    <div className="mgntmigrationfrm-blk">
                <form>
                    <h4>CONTACT US</h4>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaRegBuilding /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Business Name" name="businessname" id="businessname" required />
                            </div>
                            
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaRegUser /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Your Name" name="customername" id="customername" required />
                            </div>
                            
                        </div>
                        
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaPhone /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Contact Number" name="mobilenumber" id="mobilenumber"
                                 required />
                            </div>
                            
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaAddressCard /></div>
                                <input type="email" className="form-control mgnt-frm-input" placeholder="Email ID" name="email" id="email"
                                 required />
                            </div>
                            
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaCogs /></div>
                                <select className="form-control cmn-frm-slt" name="services" id="services"
                                    // value={formData.services} onChange={handleInputChange}
                                //  value={services} onChange={(e) => setServices(e.target.value)}

                                >
                                    <option>Select Service</option>
                                    <option value="Magento Migration">Website Development</option>
                                    <option value="Website Revamp">E-Commerce Solutions</option>
                                    <option value="Website Revamp">Digital Marketing</option>
                                    <option value="Website Revamp">App Development</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <span className='error-clr'>{error}</span> */}
                    <button type="button" className="btn btn-secondary mgn-mgr-frm-btn btn-lg" name="submit" id="submit" value="submit">Submit</button>
                </form>
            </div>
    </>
  )
}

export default ItForm
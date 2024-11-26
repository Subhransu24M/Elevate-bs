import './jafzaform.css';
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const JafzaForm = () => {
  return (
    <>
      <div className="cmn-frm-blk">
                <form>
                    <h4>CONTACT US</h4>
                    <div className="row pt-3">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaRegBuilding className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Business Name" name="businessname" id="businessname" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaRegUser className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Your Name" name="customername" id="customername" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaLink className="cmn-frm-icn" /></div>
                                <input type="email" className="form-control mgnt-frm-input" placeholder="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaPhone className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Contact Number" name="mobilenumber" id="mobilenumber" />
                            </div>
                        </div>
                        {/* <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaCogs className="cmn-frm-icn" /></div>
                                <select className="form-control cmn-frm-slt" name="services" id="services">
                                    <option>Select Service</option>
                                    <option value="CFO Services">CFO Services</option>
                                    <option value="Trademark Registration">Trademark Registration</option>
                                    <option value="Restaurant Accounting">Restaurant Accounting </option>
                                    <option value="Fund Raising">Fund Raising</option>
                                    <option value="Tax Consultancy">Tax Consultancy</option>
                                    <option value="Bank Account Opening">Bank Account Opening</option>
                                    <option value="Middle East Desk">Middle East Desk</option>
                                    <option value="Capital Arrangement">Capital Arrangement</option>
                                    <option value="Bank Loan Arrangement">Bank Loan Arrangement</option>
                                    <option value="Local Partner Arrangement">Local Partner Arrangement</option>
                                    <option value="Compliance Services">Compliance Services</option>
                                    <option value="Setting Up A Company">Setting Up A Company</option>
                                    <option value="Liquidation Services">Liquidation Services</option>
                                    <option value="VAT Registration">VAT Registration</option>
                                    <option value="VAT Deregistration">VAT Deregistration</option>
                                    <option value="Visa Assistance">Visa Assistance</option>
                                    <option value="Audit & Assurance">Audit & Assurance </option>
                                    <option value="Accounting Implementation">Accounting Implementation</option>
                                    <option value="ISO Certification">ISO Certification</option>
                                </select>
                            </div>
                        </div> */}
                    </div>
                    {/* <span className='error-clr'>{error}</span> */}
                    <button type="button" className="btn btn-secondary corp-cmn-frm-btn btn-lg" name="submit" id="submit" value="submit">Submit</button>
                </form>
            </div>
    </>
  )
}

export default JafzaForm
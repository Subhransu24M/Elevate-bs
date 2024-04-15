import uaevisaimg from './images/dubai-img.jpg';
import businessvisaimg from './images/dubai-business.jpg';
import singporevisaimg from './images/singapore-visa.jpg';
import chaticon from './icon/whatsapp.png';
import callicon from './icon/call-1.png';
import gmailicon from './icon/gmail.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheck2Square } from "react-icons/bs";
const VisaAsstCnt = () => {
  return (
    <>
    <div className='visa-main-blk'>
                <div className='container'>
                    <h2 className="singapore-tlt">UAE Visa Assistance</h2>
                    <div className='row'>
                        <div className='col-md-12 col-xl-6 col-lg-6'>
                            <div className='turist-visa-blk'>
                                {/* <h4>Tourist Visa </h4> */}
                                <Image className='uae-visa-img' src={uaevisaimg} alt="uae-visa-assistance-in-bbsr" />
                                <div className='tourist-visa-btn-blk'>
                                    <div className='visa-info'>
                                        <h4>Tourist visa within 24 hours</h4>
                                        <h6><level>Price :</level> INR 3000.00</h6>
                                    </div>

                                    {/* Button trigger modal  */}
                                    {/* <div className='btn-blk-f'>
                                        <button type="button" class="btn btn-danger visa-btn" data-toggle="modal" data-target="#bookModal">
                                            Book Now
                                        </button>

                                    </div> */}
                                    <div className='action-btn-blk'>
                                        <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon visa-chat-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon visa-call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon visa-gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                    </div>
                                </div>


                                {/* Modal Start */}
                                <div className="modal fade" id="bookModal" tabIndex="-1" role="dialog" aria-labelledby="bookModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="bookModalLabel">Tourist Visa Assistance</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Form Starts */}
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="InputName" placeholder="Enter Full Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control" id="InputMNumber" placeholder="Enter Valid Mobile Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="InputEmail" placeholder="Enter Valid Email Id" />
                                                    </div>

                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option>Select Visa Type</option>
                                                            <option>14 Day Visa</option>
                                                            <option>30 Day Visa</option>
                                                        </select>
                                                    </div>

                                                    <small id="nameHelp" className="form-text text-muted">* We'll never share your details with anyone else.</small>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger">Book Now</button>
                                                    </div>
                                                </form>

                                                {/* Form Ends */}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='tourist-visa-document'>
                                    <h4>Documents Required For The Visa Application</h4>
                                    <ul>
                                        <li><BsCheck2Square/> A passport, valid for a minimum of six months</li>
                                        <li><BsCheck2Square/> Passport size photos</li>
                                        <li><BsCheck2Square/> A copy of your completed and signed Dubai visa application form.</li>
                                        <li><BsCheck2Square/> Details about your itinerary.</li>
                                        <li><BsCheck2Square/> Proof of hotel bookings, flight bookings.</li>
                                        <li><BsCheck2Square/> Copy of tour ticket.</li>
                                        <li><BsCheck2Square/> A cover letter with all the required details about your itinerary.</li>
                                        <li><BsCheck2Square/> Statement from your bank of the last six months to prove you have enough finances to fund your visit.</li>
                                        <li><BsCheck2Square/> Address proof.</li>
                                        <li><BsCheck2Square/> Letter from your sponsor who can be a friend or relative staying in Dubai.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-xl-6 col-lg-6'>
                            <div className='turist-visa-blk'>
                                {/* <h4>Business Visa </h4> */}
                                <Image className='uae-visa-img' src={businessvisaimg} alt="uae-visa-assistance-in-bbsr" />
                                <div className='tourist-visa-btn-blk'>
                                    <div className='visa-info'>
                                        <h4>Business visa within 48 hours</h4>
                                        <h6><level>Price :</level> INR 5000.00</h6>
                                    </div>

                                    {/* Button trigger modal  */}
                                    {/* <div className='btn-blk-f'>
                                        <button type="button" class="btn btn-danger visa-btn" data-toggle="modal" data-target="#bookModal2">
                                            Book Now
                                        </button>
                                    </div> */}

                                    <div className='action-btn-blk'>
                                        <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon visa-chat-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon visa-call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon visa-gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                    </div>
                                </div>

                                {/* Modal Start */}
                                <div className="modal fade" id="bookModal2" tabIndex="-1" role="dialog" aria-labelledby="bookModalLabel2" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="bookModalLabel2">Business Visa Assistance</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Form Starts */}
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="InputName" placeholder="Enter Full Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control" id="InputMNumber" placeholder="Enter Valid Mobile Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="InputEmail" placeholder="Enter Valid Email Id" />
                                                    </div>

                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option>Select Visa Type</option>
                                                            <option>5 Year Visa</option>
                                                            <option>Life Time Visa</option>
                                                        </select>
                                                    </div>

                                                    <small id="nameHelp" className="form-text text-muted">* We'll never share your details with anyone else.</small>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger">Book Now</button>
                                                    </div>
                                                </form>

                                                {/* Form Ends */}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='tourist-visa-document'>
                                    <h4>Documents Required For The Visa Application</h4>
                                    <ul>
                                        <li><BsCheck2Square/> A passport, valid for a minimum of six months</li>
                                        <li><BsCheck2Square/> Passport size photos</li>
                                        <li><BsCheck2Square/> A copy of your completed and signed Dubai visa application form.</li>
                                        <li><BsCheck2Square/> Details about your itinerary.</li>
                                        <li><BsCheck2Square/> Proof of hotel bookings, flight bookings.</li>
                                        <li><BsCheck2Square/> Copy of tour ticket.</li>
                                        <li><BsCheck2Square/> A cover letter with all the required details about your itinerary.</li>
                                        <li><BsCheck2Square/> Statement from your bank of the last six months to prove you have enough finances to fund your visit.</li>
                                        <li><BsCheck2Square/> Address proof.</li>
                                        <li><BsCheck2Square/> Letter from your sponsor who can be a friend or relative staying in Dubai.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className='singapore-tlt'>Singapore Visa Assistance</h2>
                    <div className='row'>
                        <div className='col-md-12 col-xl-6 col-lg-6'>
                            <div className='turist-visa-blk'>
                                {/* <h4>Tourist Visa </h4> */}
                                <Image className='uae-visa-img' src={singporevisaimg} alt="uae-visa-assistance-in-bbsr" />
                                <div className='tourist-visa-btn-blk'>
                                    <div className='visa-info'>
                                        <h4>Tourist visa within 24 hours</h4>
                                        <h6><level>Price :</level> INR 3000.00</h6>
                                    </div>

                                    {/* Button trigger modal  */}
                                    {/* <div className='btn-blk-f'>
                                        <button type="button" class="btn btn-danger visa-btn" data-toggle="modal" data-target="#bookModal3">
                                            Book Now
                                        </button>
                                    </div> */}
                                    <div className='action-btn-blk'>
                                        <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon visa-chat-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon visa-call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon visa-gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                    </div>
                                </div>


                                {/* Modal Start */}
                                <div className="modal fade" id="bookModal3" tabIndex="-1" role="dialog" aria-labelledby="bookModalLabel3" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="bookModalLabel3">Tourist Visa Assistance</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Form Starts */}
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="InputName" placeholder="Enter Full Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control" id="InputMNumber" placeholder="Enter Valid Mobile Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="InputEmail" placeholder="Enter Valid Email Id" />
                                                    </div>

                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option>Select Visa Type</option>
                                                            <option>14 Day Visa</option>
                                                            <option>30 Day Visa</option>
                                                        </select>
                                                    </div>

                                                    <small id="nameHelp" className="form-text text-muted">* We'll never share your details with anyone else.</small>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger">Book Now</button>
                                                    </div>
                                                </form>

                                                {/* Form Ends */}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='tourist-visa-document'>
                                    <h4>Documents Required For The Visa Application</h4>
                                    <ul>
                                        <li><BsCheck2Square/> A passport, valid for a minimum of six months</li>
                                        <li><BsCheck2Square/> Passport size photos</li>
                                        <li><BsCheck2Square/> A copy of your completed and signed Dubai visa application form.</li>
                                        <li><BsCheck2Square/> Details about your itinerary.</li>
                                        <li><BsCheck2Square/> Proof of hotel bookings, flight bookings.</li>
                                        <li><BsCheck2Square/> Copy of tour ticket.</li>
                                        <li><BsCheck2Square/> A cover letter with all the required details about your itinerary.</li>
                                        <li><BsCheck2Square/> Statement from your bank of the last six months to prove you have enough finances to fund your visit.</li>
                                        <li><BsCheck2Square/> Address proof.</li>
                                        <li><BsCheck2Square/> Letter from your sponsor who can be a friend or relative staying in Dubai.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-xl-6 col-lg-6'>
                            <div className='turist-visa-blk'>
                                {/* <h4>Business Visa </h4> */}
                                <Image className='uae-visa-img' src={singporevisaimg} alt="uae-visa-assistance-in-bbsr" />
                                <div className='tourist-visa-btn-blk'>
                                    <div className='visa-info'>
                                        <h4>Business visa within 48 hours</h4>
                                        <h6><level>Price :</level> INR 5000.00</h6>
                                    </div>

                                    {/* Button trigger modal  */}
                                    {/* <div className='btn-blk-f'>
                                        <button type="button" class="btn btn-danger visa-btn" data-toggle="modal" data-target="#bookModal4">
                                            Book Now
                                        </button>
                                    </div> */}
                                    <div className='action-btn-blk'>
                                        <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='action-icon visa-chat-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='action-icon call-icon visa-call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                        <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='action-icon gmail-icon visa-gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="3000" /></Link>
                                    </div>
                                </div>

                                {/* Modal Start */}
                                <div className="modal fade" id="bookModal4" tabIndex="-1" role="dialog" aria-labelledby="bookModalLabel4" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="bookModalLabel4">Business Visa Assistance</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Form Starts */}
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="InputName" placeholder="Enter Full Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control" id="InputMNumber" placeholder="Enter Valid Mobile Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="InputEmail" placeholder="Enter Valid Email Id" />
                                                    </div>

                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option>Select Visa Type</option>
                                                            <option>5 Year Visa</option>
                                                            <option>Life Time Visa</option>
                                                        </select>
                                                    </div>

                                                    <small id="nameHelp" className="form-text text-muted">* We'll never share your details with anyone else.</small>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger">Book Now</button>
                                                    </div>
                                                </form>

                                                {/* Form Ends */}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='tourist-visa-document'>
                                    <h4>Documents Required For The Visa Application</h4>
                                    <ul>
                                        <li><BsCheck2Square/> A passport, valid for a minimum of six months</li>
                                        <li><BsCheck2Square/> Passport size photos</li>
                                        <li><BsCheck2Square/> A copy of your completed and signed Dubai visa application form.</li>
                                        <li><BsCheck2Square/> Details about your itinerary.</li>
                                        <li><BsCheck2Square/> Proof of hotel bookings, flight bookings.</li>
                                        <li><BsCheck2Square/> Copy of tour ticket.</li>
                                        <li><BsCheck2Square/> A cover letter with all the required details about your itinerary.</li>
                                        <li><BsCheck2Square/> Statement from your bank of the last six months to prove you have enough finances to fund your visit.</li>
                                        <li><BsCheck2Square/> Address proof.</li>
                                        <li><BsCheck2Square/> Letter from your sponsor who can be a friend or relative staying in Dubai.</li>
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

export default VisaAsstCnt